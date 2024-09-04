import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { IBusiness } from 'src/app/shared/models/business.model';
import { APIService } from 'src/app/shared/services/api.service';
import { CepService } from 'src/app/shared/services/cep.service';

@Component({
  selector: 'it-unit-detail',
  templateUrl: './unit-detail.component.html',
  styleUrls: ['./unit-detail.component.scss'],
})
export class UnitDetailComponent implements OnInit {
  idCompany!: number;
  dataCompany!: IBusiness | any;
  formGroup!: FormGroup;

  constructor(
    private APIService: APIService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private cepService: CepService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.idCompany = Number(this.route.snapshot.paramMap.get('id'));
    this.getDetailUnit(this.idCompany);

    let initialize = ['', [Validators.required]];
    this.formGroup = this.fb.group({
      cep: initialize,
      street: initialize,
      neighborhood: initialize,
      state: initialize,
      city: initialize,

      name: initialize,
      business: initialize,
      valuation: initialize,
      active: initialize,
      cnpj: initialize,
    });
  }
  getDetailUnit(id: number): void {
    this.APIService.getDetailCompany(id).subscribe({
      next: (companyRes) => {
        this.dataCompany = companyRes;

        this.cepService
          .searchAddressByCep(companyRes.cep)
          .subscribe((addressRes) => {
            this.formGroup.patchValue({
              cep: addressRes.cep || companyRes.cep || '',
              street: addressRes.street || '',
              neighborhood: addressRes.neighborhood || '',
              state: addressRes.state || '',
              city: addressRes.city || '',

              name: companyRes.name || '',
              business: companyRes.business || '',
              valuation: companyRes.valuation || '',
              active: companyRes.active || true,
              cnpj: companyRes.cnpj || '',
            });
          })
          
      },
      error: (err) => {
        console.error('Erro ao buscar detalhes da empresa:', err);
      },
    });
  }
  onSubmit(): void {    
    if (this.formGroup.valid) {
      this.snackBar.open(
        `Dados salvos com sucesso. Voce será redirecionado em 5 segundos `,
        'Fechar',
        {
          duration: 5000,
          horizontalPosition: 'right',
          verticalPosition: 'top',
        }
      );
      setTimeout(() => {
        this.goBack()
      }, 5000);
    } else {
      this.snackBar.open('Verifique os campos obrigatórios!', 'Fechar', {
        duration: 5000,
        horizontalPosition: 'right',
        verticalPosition: 'top',
      });
    }
  }
  onCepChange(dataAddress: any): void {
    this.formGroup.patchValue({
      cep: dataAddress.cep || '',
      street: dataAddress.street || '',
      neighborhood: dataAddress.neighborhood || '',
      state: dataAddress.state || '',
      city: dataAddress.city || ''
    });
  }
  goBack(): void {
    this.router.navigate(['polos']);
  }
}

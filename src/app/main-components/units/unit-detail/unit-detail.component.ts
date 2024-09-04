import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
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
    private fb: FormBuilder,
    private cepService: CepService
  ) {}

  ngOnInit(): void {
    this.idCompany = Number(this.route.snapshot.paramMap.get('id'));
    this.getDetailUnit(this.idCompany);

    this.formGroup = this.fb.group({
      cep: ['', [Validators.required, Validators.pattern(/^\d{5}-\d{3}$/)]],
      street: ['', Validators.required],
      neighborhood: ['', Validators.required],
      state: ['', Validators.required],
      city: ['', Validators.required],

      name: ['', Validators.required],
      business: ['', Validators.required],
      valuation: ['', Validators.required],
      active: ['', Validators.required],
      cnpj: ['', Validators.required],
    });
  }
  getDetailUnit(id: number): void {
    this.APIService.getDetailCompany(id).subscribe({
      next: (companyRes) => {
        this.dataCompany = companyRes;
  
        this.cepService.searchAdressByCep(companyRes.cep).then(addressRes => {
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
            cnpj: companyRes.cnpj || ''
          });
        }).catch(error => {
          console.error('Erro ao buscar o endereço pelo CEP:', error);
        });
      },
      error: (err) => {
        console.error('Erro ao buscar detalhes da empresa:', err);
      }
    });
  }
  onSubmit(): void {   
     
    if (this.formGroup.valid) {
      console.log('VALIDO',this.formGroup.value);
    } else {
      console.log('Formulário inválido',this.formGroup);
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
}

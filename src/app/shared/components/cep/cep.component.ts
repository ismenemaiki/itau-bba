import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { CepService } from '../../services/cep.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
} from '@angular/forms';

@Component({
  selector: 'it-cep',
  templateUrl: './cep.component.html',
  styleUrls: ['./cep.component.scss'],
})
export class CepComponent implements OnInit, OnChanges {
  @Input() cep: string = '';
  @Output() cepChanged = new EventEmitter<string>();
  formGroup!: FormGroup;
  constructor(private cepService: CepService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      cep: new FormControl(),
    });
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['cep'] && this.cep) {
      this.searchCep()
      this.formGroup.get('cep')?.setValue(this.cep, { emitEvent: false });
    }
  }
  searchCep(): void {
    const cepValue = this.formGroup.get('cep')?.value;
    if (cepValue) {
      this.cepService.searchAdressByCep(cepValue).then((res) => {
        console.log('get cep', res);
        this.cepChanged.emit(res);
      });
    }
  }
}

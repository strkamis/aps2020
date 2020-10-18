import { Component, OnInit } from '@angular/core';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
// import { MAT_MOMENT_DATE_FORMATS, MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material';
import { FormGroup, Validators } from '@angular/forms';
import {FormControl} from '@angular/forms';


@Component({
  selector: 'app-cadastro-event',
  templateUrl: './cadastro-event.component.html',
  styleUrls: ['./cadastro-event.component.css']
})
export class CadastroEventComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  constructor( ) {} 

  ngOnInit(): void {
  }

}

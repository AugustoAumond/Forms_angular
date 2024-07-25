import { Component, NgModule, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EventEmitter } from '@angular/core';

import { userDatasFirstComponentProps} from '../interfaces/interfaces';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { faEnvelope, faUser } from '@fortawesome/free-regular-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';



@Component({
  selector: 'app-first-forms',
  standalone: true,
  imports: [FormsModule,  FontAwesomeModule, NgxMaskDirective],
  templateUrl: './first-forms.component.html',
  styleUrl: './first-forms.component.css',
  providers: [provideNgxMask({ /* opções de cfg */ })]
})
export class FirstFormsComponent {
  userDatas: userDatasFirstComponentProps = {
    name: '',
    age: undefined,
    phone: undefined,
    email: '', 
    isFirstFormsComplete: false
  };

  validation?: string = '';

  user = faUser;
  phone = faPhone
  email = faEnvelope


  @Output() messageDatas: EventEmitter<any> = new EventEmitter;

  getUserDatas(){

    if (this.userDatas.name === '' || this.userDatas.name && this?.userDatas.name.length <= 4) {
      this.validation = 'Preencha o seu nome!'
      return 
    } else if (this.userDatas.age === undefined) {
      this.validation = 'Preencha o sua idade!'
      return 
    } else if (this.userDatas.phone === undefined) {
      this.validation = 'Preencha o seu telefone!'
      return 
    } else if (this.userDatas.email === '' ){
      this.validation = 'Preencha seu email!'
      return 
    } 
    
    this.userDatas.isFirstFormsComplete = true;

    console.log(this.userDatas)

    this.messageDatas.emit(this.userDatas)
  }

}

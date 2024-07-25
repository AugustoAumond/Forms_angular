import { Component, EventEmitter, Output } from '@angular/core';
import { userDatasSecondComponentProps } from '../interfaces/interfaces';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-second-forms',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './second-forms.component.html',
  styleUrl: './second-forms.component.css'
})
export class SecondFormsComponent {
  isFirstFormsComplete: Boolean = false;

  userDatas: userDatasSecondComponentProps = {
    city: '',
    district: '',
    street: '',
    numberOfTheHouse: undefined, 
    isSecondFormsComplete: false
  };

  validation: string = '';


  @Output() messageCloseSecondForms: EventEmitter<any> = new EventEmitter;
  @Output() messageCreateCard: EventEmitter<any> = new EventEmitter;

  closeModal(){
    this.messageCloseSecondForms.emit(false)
  }

  createCard(){
    if (this.userDatas.city === '') {
      this.validation = 'Preencha o sua cidade!'
      return 
    } else if (this.userDatas.district === '') {
      this.validation = 'Preencha o seu bairro!'
      return 
    } else if (this.userDatas.street === '') {
      this.validation = 'Preencha o seu endereço!'
      return 
    } else if (this.userDatas.numberOfTheHouse === undefined ){
      this.validation = 'Preencha o número da sua rua!'
      return 
    } 

    this.userDatas.isSecondFormsComplete = true;

    this.messageCreateCard.emit(this.userDatas)
  }

}

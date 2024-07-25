import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstFormsComponent } from "./first-forms/first-forms.component";
import { SecondFormsComponent } from './second-forms/second-forms.component';
import { userDatasFirstComponentProps, userDatasSecondComponentProps } from './interfaces/interfaces';
import { CardComponent } from "./card/card.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FirstFormsComponent, SecondFormsComponent, CardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'create-card';
  datasUserFirstComponent?: userDatasFirstComponentProps = {
    name: '',
    age: undefined,
    email: '',
    phone: undefined,
    isFirstFormsComplete: false
  };

    datasUserSecondComponent?: userDatasSecondComponentProps = {
      city: '',
      district: '',
      street: '',
      numberOfTheHouse: undefined,
      isSecondFormsComplete: false
    };

  receiveDatas(event: userDatasFirstComponentProps){
    console.log(event)
    this.datasUserFirstComponent = event;
  }

  receiveCloseModal(event: boolean){
    console.log(event)
    if ( this.datasUserFirstComponent)
    this.datasUserFirstComponent.isFirstFormsComplete = event;
  }

  receiveDatasSecondForm(event: userDatasSecondComponentProps){
    console.log(event)
    this.datasUserSecondComponent = event;
  }
}
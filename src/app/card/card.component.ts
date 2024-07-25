import { Component, Input } from '@angular/core';

import { userDatasFirstComponentProps, userDatasSecondComponentProps } from '../interfaces/interfaces';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() datasFirstComponent?: userDatasFirstComponentProps;
  @Input() datasSecondComponent?: userDatasSecondComponentProps;

  
}

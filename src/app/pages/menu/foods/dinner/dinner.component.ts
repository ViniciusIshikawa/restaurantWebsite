import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-dinner',
  standalone: true,
  imports: [
    MatCardModule
  ],
  templateUrl: './dinner.component.html',
  styleUrl: './dinner.component.css'
})
export class DinnerComponent {

}

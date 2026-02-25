import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-lunch',
  standalone: true,
  imports: [
    MatCardModule
  ],
  templateUrl: './lunch.component.html',
  styleUrl: './lunch.component.css'
})
export class LunchComponent {

}

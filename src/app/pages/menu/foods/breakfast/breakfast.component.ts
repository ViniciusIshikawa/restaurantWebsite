import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-breakfast',
  standalone: true,
  imports: [
    MatCardModule
  ],
  templateUrl: './breakfast.component.html',
  styleUrl: './breakfast.component.css'
})
export class BreakfastComponent {

}

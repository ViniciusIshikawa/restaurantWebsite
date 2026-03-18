import { Component } from '@angular/core';
import {
  MatDialogTitle,
  MatDialogContent,
} from '@angular/material/dialog';

@Component({
  selector: 'app-form-dialog',
  standalone: true,
  imports: [
    MatDialogTitle,
    MatDialogContent
  ],
  templateUrl: './form-dialog.component.html',
  styleUrl: './form-dialog.component.css'
})
export class FormDialogComponent {

}

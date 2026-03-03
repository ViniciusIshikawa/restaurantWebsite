import { Component, inject } from '@angular/core';
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [
    MatDialogActions,
    MatDialogClose,
    MatDialogContent,
    MatDialogTitle,
    MatButtonModule
  ],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.css'
})
export class DialogComponent {
  readonly dialogRef = inject(MatDialogRef<DialogComponent>);

  onConfirmClick(): void {
    this.dialogRef.close(true);
  }
}

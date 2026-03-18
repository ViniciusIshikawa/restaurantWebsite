import { Component, inject, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import { ActivatedRoute, RouterLink } from "@angular/router";
import { MatDivider } from "@angular/material/divider";
import * as Leaflet from 'leaflet';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { FormDialogComponent } from './form-dialog/form-dialog.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    RouterLink,
    MatDivider,
    ReactiveFormsModule,
    MatDialogModule
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  dialog = inject(MatDialog);
  contactForm!: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder
  ){}

  ngOnInit(): void {
    window.scrollTo({top: 0, behavior: 'smooth'});

    this.contactForm = this.fb.group({
        name: [null, [Validators.required]],
        email: [null, [Validators.required, Validators.email]],
        phoneNumber: [null, [Validators.required, Validators.pattern(/^[0-9]+$/)]],
        subject: [null, [Validators.required]],
        more: [null]
    });
  }

  ngAfterViewInit() {
    const map = Leaflet.map('map').setView([53.3498, -6.2603], 13);

    Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© OpenStreetMap'
    }).addTo(map);

    Leaflet.marker([53.3498, -6.2603]).addTo(map)
      .openPopup();

    this.route.fragment.subscribe(f => {
      if (f) {
        document.getElementById(f)?.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  openDialog() {
    this.dialog.open(FormDialogComponent);
    this.contactForm.setValue({
        name: null,
        email: null,
        phoneNumber: null,
        subject: null,
        more: null
    });
    this.contactForm.markAsUntouched();
  }
}

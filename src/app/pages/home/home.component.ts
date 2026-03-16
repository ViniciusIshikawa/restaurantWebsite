import { Component, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import { ActivatedRoute, RouterLink } from "@angular/router";
import { MatDivider } from "@angular/material/divider";
import * as Leaflet from 'leaflet';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    RouterLink,
    MatDivider,
    ReactiveFormsModule
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  contactForm!: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder
  ){}

  ngOnInit(): void {
    window.scrollTo({top: 0, behavior: 'smooth'});

    this.contactForm = this.fb.group({
      name: [[''], [Validators.required]],
      email: [[''], [Validators.required, Validators.email]],
      phoneNumber: [[''], [Validators.required, Validators.pattern(/^[0-9]+$/)]],
      subject: [[''], [Validators.required]],
      more: ['']
    })
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
}

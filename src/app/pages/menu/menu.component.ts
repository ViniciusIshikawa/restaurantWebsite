import { Component, OnInit } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';
import { MatButton } from "@angular/material/button";
import { RouterLink, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    MatSidenavModule,
    MatDividerModule,
    MatButton,
    RouterLink,
    RouterOutlet
],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit {

  ngOnInit(): void {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }
}

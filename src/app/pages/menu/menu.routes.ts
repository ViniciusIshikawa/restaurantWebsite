import { Routes } from '@angular/router';

export const MENU_ROUTES: Routes = [
  {
    path:'',
    loadComponent: () => import('./menu.component').then(c => c.MenuComponent),
    children: [
      {
        path:'',
        pathMatch: 'full',
        redirectTo: 'breakfast'
      },
      {
        path:'breakfast',
        loadComponent: () => import('./foods/breakfast/breakfast.component').then(c => c.BreakfastComponent)
      },
      {
        path:'lunch',
        loadComponent: () => import('./foods/lunch/lunch.component').then(c => c.LunchComponent)
      },
      {
        path:'dinner',
        loadComponent: () => import('./foods/dinner/dinner.component').then(c => c.DinnerComponent)
      }
    ]
  }
]

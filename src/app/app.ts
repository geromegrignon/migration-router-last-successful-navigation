import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  private readonly router = inject(Router);

  constructor() {
    if(this.router.lastSuccessfulNavigation()) {
      console.log('lastSuccessfulNavigation', this.router.lastSuccessfulNavigation().finalUrl);
    }
  }
}

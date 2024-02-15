import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FrutaComponent } from './fruit/fruta.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FrutaComponent],
  template:`
  <main>
    <header class="brand-name">
      <img class="brand-logo" src="/assets/logo.svg" alt="logo">
    </header>
    <section class="content">
      <fruta></fruta>
  </section>
  </main>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'first-app';
}

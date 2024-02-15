import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FrutaComponent } from './fruit/fruta.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FrutaComponent],
  template:`
      <fruta></fruta>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'first-app';
}

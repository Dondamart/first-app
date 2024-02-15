import { Component } from '@angular/core';

@Component({
  selector: 'fruta',
  standalone: true,
  imports: [],
  templateUrl:`./fruta.component.html`,

  styleUrl: './fruta.component.css'
})
export class FrutaComponent {
  public nombre_componente= 'A la rica fruta';
}

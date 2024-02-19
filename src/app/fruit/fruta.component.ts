import { Component } from '@angular/core';

@Component({
  selector: 'limon',
  standalone: true,
  imports: [],
  templateUrl:`./fruta.component.html`,
  styleUrl: './fruta.component.css'
})
export class FrutaComponent {
  public nombre_componente= 'A la rica fruta';
  public nombre :string;
  public edad: number;
  public mayorDeEdad: boolean;
  public trabajos: Array<any>=[];
  public comodin: any;

  constructor(){
    this.nombre='Daniel Martín';
    this.edad= 35;
    this.mayorDeEdad=true;
    this.trabajos=['docente', 'desarrollador web'];
  }
  ngOnInit(){
    this.cambiarNombre('Paco');
  }

  cambiarNombre(nuevoNombre:string){
    this.nombre= nuevoNombre;
  }
}

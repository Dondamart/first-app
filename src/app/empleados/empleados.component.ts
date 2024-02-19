import { Component } from '@angular/core';
import { Empleado } from './classEmpleado';

@Component({
  selector: 'empleados',
  standalone: true,
  imports: [],
  templateUrl: `./empleados.component.html`,
  styleUrl: './empleados.component.css'
})
export class EmpleadosComponent {
  public titulo= 'Estos son los empleados modelo';
  public empleado: Empleado | undefined;
  public trabajadores: Array<Empleado> = [];

  constructor(){
    this.empleado= new Empleado('Daniel', 35, 'Programador', true);
    this.trabajadores=[
      new Empleado('Ana', 32, 'Administrativa', true),
      new Empleado('Luis', 35, 'Ingeniero', true),
      new Empleado('Jacinto', 39, 'Holgazán', false)
    ]
  }

  ngOnInit(){
  }
}

import { Component } from '@angular/core';
import { Empleado } from './classEmpleado';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'empleados',
  standalone: true,
  imports: [CommonModule],
  templateUrl: `./empleados.component.html`,
  styleUrl: './empleados.component.css'
})
export class EmpleadosComponent {
  public titulo= 'Estos son los empleados modelo';
  public empleado: Empleado | undefined;
  public trabajadores: Array<Empleado> = [];
  public trabajadorExterno: boolean | undefined;

  constructor(){
    this.empleado= new Empleado('Daniel', 35, 'Programador', true);
    this.trabajadores=[
      new Empleado('Ana', 32, 'Administrativa', true),
      new Empleado('Luis', 35, 'Ingeniero', true),
      new Empleado('Jacinto', 39, 'Holgazán', false)
    ];
    this.trabajadorExterno=false;

  }
  ngOnInit(){
  }
  cambiarExterno(){
    if (this.trabajadorExterno==true) {
      this.trabajadorExterno=false;
    }else{
      this.trabajadorExterno=true;
    }
   
  }
}

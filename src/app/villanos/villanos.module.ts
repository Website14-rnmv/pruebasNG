import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvengersComponent } from './avengers/avengers.component';



@NgModule({
  declarations: [
    AvengersComponent
  ],
  exports:[
    AvengersComponent //exportamos el componente para que pueda exportarse al modulo principal
  ],
  imports: [
    CommonModule
  ]
})
export class VillanosModule { }

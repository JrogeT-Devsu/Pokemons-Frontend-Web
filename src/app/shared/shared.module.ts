import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ButtonComponent} from "./components/button/button.component";
import {InputComponent} from "./components/input/input.component";
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    ButtonComponent,
    InputComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    ButtonComponent,
    InputComponent,
  ]
})
export class SharedModule { }

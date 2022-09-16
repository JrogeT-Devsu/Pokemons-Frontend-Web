import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from "./components/table/table.component";
import { PokemonsService } from "../../core/services/pokemons/pokemons.service";
import { PokemonsComponent } from "./pages/pokemons/pokemons.component";
import { FormComponent } from "./components/form/form.component";

@NgModule({
  declarations: [
    TableComponent,
    PokemonsComponent,
    FormComponent,
  ],
  exports: [
    PokemonsComponent,
  ],
  imports: [
    CommonModule,
  ],
  providers: [
    PokemonsService,
  ]
})
export class PokemonsModule { }

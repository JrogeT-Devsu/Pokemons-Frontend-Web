import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from "./components/table/table.component";
import { PokemonsService } from "../../core/services/pokemons/pokemons.service";
import { PokemonsComponent } from "./pages/pokemons/pokemons.component";
import { FormComponent } from "./components/form/form.component";
import {SearchComponent} from "../../search/search.component";
import {FormsModule} from "@angular/forms";
import {CreateComponent} from "../../create/create.component";

@NgModule({
  declarations: [
    TableComponent,
    PokemonsComponent,
    FormComponent,
    SearchComponent,
    CreateComponent,
  ],
  exports: [
    PokemonsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  providers: [
    PokemonsService,
  ]
})
export class PokemonsModule { }

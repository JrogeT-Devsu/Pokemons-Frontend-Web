import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from "./components/table/table.component";
import { PokemonsService } from "../../core/services/pokemons/pokemons.service";
import { PokemonsComponent } from "./pages/pokemons/pokemons.component";
import { FormComponent } from "./components/form/form.component";
import {SearchComponent} from "./components/search/search.component";
import {FormsModule} from "@angular/forms";
import {CreateComponent} from "./components/create/create.component";
import {SharedModule} from "../../shared/shared.module";

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
    SharedModule,
  ],
  providers: [
    PokemonsService,
  ]
})
export class PokemonsModule { }

import { Component } from '@angular/core';
import {PokemonsService} from "../../../../core/services/pokemons/pokemons.service";
import {Pokemon} from "../../../../core/models/Pokemon";

@Component({
  selector: 'pokemon-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.sass']
})
export class CreateComponent {

  constructor(
    private pokemonsService: PokemonsService
  ) { }

  createPokemon() {
    this.pokemonsService.pokemonInContext.next(new Pokemon());
  }
}

import { Component, OnInit } from '@angular/core';
import {Pokemon} from "../../../../core/models/Pokemon";
import {PokemonsService} from "../../../../core/services/pokemons/pokemons.service";

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.sass']
})
export class PokemonsComponent {

  public pokemonInContext?: Pokemon | null;

  public constructor(
    private pokemonsService: PokemonsService
  ) {
    this.pokemonsService.pokemonInContext.subscribe((pokemon) => {
      this.pokemonInContext = pokemon;
    });
  }
}

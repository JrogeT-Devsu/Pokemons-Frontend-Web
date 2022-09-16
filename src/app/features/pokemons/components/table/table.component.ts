import {Component, OnInit} from '@angular/core';
import {PokemonsService} from "../../../../core/services/pokemons/pokemons.service";
import {Pokemon} from "../../../../core/models/Pokemon";

@Component({
  selector: 'pokemon-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.sass']
})
export class TableComponent implements OnInit {

  public pokemonList: Pokemon[];

  constructor(
    private pokemonsService: PokemonsService
  ) {
    this.pokemonList = [];
  }

  ngOnInit(): void {
    this.pokemonsService.pokemonList.subscribe((pokemons) => {
      this.pokemonList = pokemons;
    });
  }

  public editPokemon(pokemon: Pokemon): void {
    this.pokemonsService.pokemonInContext.next(pokemon);
  }

  public deletePokemon(pokemon: Pokemon): void {
    this.pokemonsService.deletePokemon(pokemon);
  }

}

import { Component } from '@angular/core';
import {PokemonsService} from "../../../../core/services/pokemons/pokemons.service";

@Component({
  selector: 'pokemon-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent {

  public word: string = '';

  constructor(
    private pokemonsService: PokemonsService
  ) {}

  search() {
    if(this.word.length > 0) {
      this.pokemonsService.searchPokemon(this.word);
    }else{
      this.pokemonsService.clearSearch();
    }
  }

}

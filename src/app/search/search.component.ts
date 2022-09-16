import { Component, OnInit } from '@angular/core';
import {PokemonsService} from "../core/services/pokemons/pokemons.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent implements OnInit {

  public word: string = '';

  constructor(
    private pokemonsService: PokemonsService
  ) {}

  ngOnInit(): void {
  }

  search() {
    console.log("searching for: " + this.word);
    if(this.word.length > 0) {
      this.pokemonsService.searchPokemon(this.word);
    }else{
      this.pokemonsService.clearSearch();
    }
  }

}

import { Injectable } from '@angular/core';
import {RestService} from "../rest.service";
import {Pokemon} from "../../models/Pokemon";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class PokemonsService {

  public pokemonList:BehaviorSubject<Pokemon[]> = new BehaviorSubject<Pokemon[]>([]);
  public savedPokemonList: Pokemon[];
  public pokemonInContext: BehaviorSubject<Pokemon|null> = new BehaviorSubject<Pokemon|null>(null);

  constructor(
    private restService: RestService,
  ) {
    this.pokemonList.next([]);
    this.savedPokemonList = [];
    this.getPokemons();
  }

  public getPokemons(): void {
    this.restService.get<Pokemon[]>('/?idAuthor=1')
      .subscribe((pokemons: Pokemon[]) => {
        this.pokemonList.next(pokemons);
      });
  }

  public upsertPokemon(): void  {
    this.pokemonInContext.value!.idAuthor = this.pokemonInContext.value?.id_author!;
    this.pokemonInContext.value!.type = "pokemon";
    if(this.pokemonInContext.value?.id === 0) {
      this.createPokemon();
    }else{
      this.updatePokemon();
    }
    this.pokemonInContext.next(null);
  }

  public createPokemon(): void  {
    this.restService.post<Pokemon>('/', this.pokemonInContext.value).subscribe(() => {
      this.getPokemons();
    });
  }

  public updatePokemon(): void  {
    this.pokemonList.next(this.pokemonList.value.map((p) => {
      if (p.id === this.pokemonInContext.value?.id) {
        return this.pokemonInContext.value;
      }
      return p;
    }));
    this.restService.put('/' + this.pokemonInContext.getValue()!.id, this.pokemonInContext.getValue()).subscribe(() => {
      this.getPokemons();
    });
  }

  public deletePokemon(pokemon: Pokemon): void  {
    this.pokemonList.next(this.pokemonList.value.filter((p) => p.id !== pokemon.id));
    this.restService.delete('/' + pokemon.id).subscribe(() => {
      this.getPokemons();
    });
  }

  searchPokemon(word: string): void {
    if (this.savedPokemonList.length === 0){
      this.savedPokemonList = this.pokemonList.value;
    }
    this.pokemonList.next(
      this.pokemonList.value.filter((pokemon: Pokemon) => {
        return pokemon.name.includes(word);
      })
    );
  }

  clearSearch() {
    this.pokemonList.next(this.savedPokemonList);
    this.savedPokemonList = [];
  }
}

import { Injectable } from '@angular/core';
import {PokemonsModule} from "../../../features/pokemons/pokemons.module";
import {RestService} from "../rest.service";
import {Pokemon} from "../../models/Pokemon";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable()
export class PokemonsService {

  public pokemonList:BehaviorSubject<Pokemon[]> = new BehaviorSubject<Pokemon[]>([]);

  constructor(
    private restService: RestService,
  ) {
    this.pokemonList.next([]);
    this.getPokemons();
  }

  public getPokemons(): void {
    this.restService.get<Pokemon[]>('/?idAuthor=1')
      .subscribe((pokemons: Pokemon[]) => {
        console.log(pokemons)
        this.pokemonList.next(pokemons);
      });
  }

  public editPokemon(pokemon: Pokemon): void  {
    this.restService.put('/' + pokemon.id, pokemon).subscribe(() => {
      this.getPokemons();
    });
  }

  public deletePokemon(pokemon: Pokemon): void  {
    this.restService.delete('/' + pokemon.id).subscribe(() => {
      this.getPokemons();
    });
  }
}

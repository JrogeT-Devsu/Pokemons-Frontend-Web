import {Component, Input, OnInit} from '@angular/core';
import {Pokemon} from "../../../../core/models/Pokemon";
import {PokemonsService} from "../../../../core/services/pokemons/pokemons.service";

@Component({
  selector: 'pokemon-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass']
})
export class FormComponent implements OnInit {

  @Input() pokemon!: Pokemon | null;

  public constructor(
    private pokemonsService: PokemonsService
  ) {
    this.pokemon = new Pokemon();
  }

  public ngOnInit(): void {
    this.pokemonsService.pokemonInContext.subscribe((pokemon) => {
      this.pokemon = pokemon;
    });
  }

  public guardar(): void {
    this.pokemonsService.upsertPokemon();
  }

  public cancelar(): void {
    this.pokemonsService.pokemonInContext.next(null);
  }
}

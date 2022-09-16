import {Component, Input} from '@angular/core';
import {Pokemon} from "../../../../core/models/Pokemon";
import {PokemonsService} from "../../../../core/services/pokemons/pokemons.service";

@Component({
  selector: 'pokemon-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass']
})
export class FormComponent {

  @Input() pokemon!: Pokemon;

  public constructor(
    private pokemonsService: PokemonsService
  ) {
  }

  public guardar(): void {
    this.pokemonsService.upsertPokemon();
  }

  public cancelar(): void {
    this.pokemonsService.pokemonInContext.next(null);
  }
}

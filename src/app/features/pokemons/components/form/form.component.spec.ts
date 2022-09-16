import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormComponent } from './form.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {PokemonsService} from "../../../../core/services/pokemons/pokemons.service";
import {Pokemon} from "../../../../core/models/Pokemon";
import {BehaviorSubject} from "rxjs";
import {InputComponent} from "../../../../shared/components/input/input.component";
import {By} from "@angular/platform-browser";
import {Component, Input} from "@angular/core";

@Component({
  selector: 'app-input',
  template: '',
})
class FakeInputComponent implements Partial<InputComponent> {
  @Input()
  public modelElement!: string;
}

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;
  let fakePokemonsService: PokemonsService;
  let fakeInputComponent: FakeInputComponent;

  beforeEach(async () => {
    fakePokemonsService = jasmine.createSpyObj<PokemonsService>(
      'PokemonsService',
      {
        getPokemons:void {},
      },
      {
        pokemonInContext: new BehaviorSubject<Pokemon|null>(new Pokemon()),
      }
    );

    await TestBed.configureTestingModule({
      declarations: [
        FormComponent,
        FakeInputComponent,
      ],
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        {
          provide: PokemonsService,
          useValue: fakePokemonsService
        }
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    const inputComponent = fixture.debugElement.query(
      By.directive(FakeInputComponent)
    );
    fakeInputComponent = inputComponent.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a pokemon', () => {
    expect(component.pokemon).toBeTruthy();
  });

  it('should have a pokemon with id', () => {
    fakePokemonsService.pokemonInContext.next(new Pokemon(1));
    expect(component.pokemon?.id).toBeGreaterThan(0);
  });

  it('should show pokemon name', () => {
    const pokemon = new Pokemon(1, 'Pikachu');
    fakePokemonsService.pokemonInContext.next(pokemon);
    fixture.detectChanges();
    expect(fakeInputComponent.modelElement).toEqual(pokemon.name);
  });
});

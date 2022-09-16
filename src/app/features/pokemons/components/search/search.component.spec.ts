import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchComponent } from './search.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {Component, EventEmitter, Input, Output} from "@angular/core";
import {PokemonsService} from "../../../../core/services/pokemons/pokemons.service";
import {BehaviorSubject} from "rxjs";
import {Pokemon} from "../../../../core/models/Pokemon";
import {InputComponent} from "../../../../shared/components/input/input.component";
import {By} from "@angular/platform-browser";

@Component({
  selector: 'app-input',
  template: '',
})
class FakeInputComponent implements Partial<InputComponent> {
  @Input()
  public modelElement!: string;
  @Output()
  public modelElementChange: EventEmitter<string> = new EventEmitter<string>();
  @Output()
  public onKeyUp: EventEmitter<string> = new EventEmitter<string>();
}

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let fakePokemonsService: PokemonsService;
  let fakeInputComponent: FakeInputComponent;

  beforeEach(async () => {
    fakePokemonsService = jasmine.createSpyObj<PokemonsService>(
      'PokemonsService',
      {
        getPokemons:void {},
        clearSearch:void {},
        searchPokemon: void{},
      },
      {
        pokemonList: new BehaviorSubject<Pokemon[]>([]),
      },
    );
    await TestBed.configureTestingModule({
      declarations: [
        SearchComponent,
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

    fixture = TestBed.createComponent(SearchComponent);
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

  it('should have a search input', () => {
    expect(fakeInputComponent).toBeTruthy();
  });

  it('should search for a pokemon', () => {
    spyOn(component, 'search');
    fakeInputComponent.onKeyUp.emit('p');
    expect(component.search).toHaveBeenCalled();
  });

  it('should clear search', () => {
    fakeInputComponent.onKeyUp.emit('');
    expect(fakePokemonsService.clearSearch).toHaveBeenCalled();
  });

});

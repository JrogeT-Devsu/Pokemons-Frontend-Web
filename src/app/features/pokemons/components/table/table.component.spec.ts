import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableComponent } from './table.component';
import {PokemonsService} from "../../../../core/services/pokemons/pokemons.service";
import {BehaviorSubject} from "rxjs";
import {Pokemon} from "../../../../core/models/Pokemon";

describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;
  let fakePokemonsService: PokemonsService;

  beforeEach(async () => {
    fakePokemonsService = jasmine.createSpyObj<PokemonsService>(
      'PokemonsService',
      {
        getPokemons:void {},
      },
      {
        pokemonList: new BehaviorSubject<Pokemon[]>([]),
      },
    );
    await TestBed.configureTestingModule({
      declarations: [ TableComponent ],
      providers: [
        {
          provide: PokemonsService,
          useValue: fakePokemonsService
        }
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a table', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('table')).toBeTruthy();
  });

  it('should have a table with 3 pokemons', () => {
    fakePokemonsService.pokemonList.next([
      new Pokemon(1, 'Bulbasaur'),
      new Pokemon(2, 'Ivysaur'),
      new Pokemon(3, 'Venusaur'),
    ]);
    const compiled = fixture.nativeElement;
    fixture.detectChanges();
    let pokemonsCountExpected = 3;
    let tableHeadersRows = 1;
    let expected = pokemonsCountExpected + tableHeadersRows;
    expect(compiled.querySelectorAll('tr').length).toBe(expected);
  });
});

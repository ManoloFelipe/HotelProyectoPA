import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscadorFechasComponent } from './buscador-fechas.component';

describe('BuscadorFechasComponent', () => {
  let component: BuscadorFechasComponent;
  let fixture: ComponentFixture<BuscadorFechasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuscadorFechasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscadorFechasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

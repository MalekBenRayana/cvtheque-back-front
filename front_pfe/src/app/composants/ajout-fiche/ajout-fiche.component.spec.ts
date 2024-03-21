import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutFicheComponent } from './ajout-fiche.component';

describe('AjoutFicheComponent', () => {
  let component: AjoutFicheComponent;
  let fixture: ComponentFixture<AjoutFicheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutFicheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutFicheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionEntretienComponent } from './gestion-entretien.component';

describe('GestionEntretienComponent', () => {
  let component: GestionEntretienComponent;
  let fixture: ComponentFixture<GestionEntretienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionEntretienComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionEntretienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

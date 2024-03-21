import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionBesoinsComponent } from './gestion-besoins.component';

describe('GestionBesoinsComponent', () => {
  let component: GestionBesoinsComponent;
  let fixture: ComponentFixture<GestionBesoinsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionBesoinsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionBesoinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

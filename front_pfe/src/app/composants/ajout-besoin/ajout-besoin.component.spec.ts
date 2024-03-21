import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutBesoinComponent } from './ajout-besoin.component';

describe('AjoutBesoinComponent', () => {
  let component: AjoutBesoinComponent;
  let fixture: ComponentFixture<AjoutBesoinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutBesoinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutBesoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

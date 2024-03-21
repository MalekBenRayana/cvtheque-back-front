import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutCandidatComponent } from './ajout-candidat.component';

describe('AjoutCandidatComponent', () => {
  let component: AjoutCandidatComponent;
  let fixture: ComponentFixture<AjoutCandidatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutCandidatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutCandidatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

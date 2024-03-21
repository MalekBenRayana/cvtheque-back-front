import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateBesoinComponent } from './update-besoin.component';

describe('UpdateBesoinComponent', () => {
  let component: UpdateBesoinComponent;
  let fixture: ComponentFixture<UpdateBesoinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateBesoinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateBesoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

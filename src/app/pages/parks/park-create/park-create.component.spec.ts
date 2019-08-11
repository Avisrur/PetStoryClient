import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkCreateComponent } from './park-create.component';

describe('ParkEditComponent', () => {
  let component: ParkCreateComponent;
  let fixture: ComponentFixture<ParkCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParkCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParkCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

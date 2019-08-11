import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkTableComponent } from './park-table.component';

describe('ParkTableComponent', () => {
  let component: ParkTableComponent;
  let fixture: ComponentFixture<ParkTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParkTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParkTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

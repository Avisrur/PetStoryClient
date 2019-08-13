import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NearestParkComponent } from './nearest-park.component';

describe('NearestParkComponent', () => {
  let component: NearestParkComponent;
  let fixture: ComponentFixture<NearestParkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NearestParkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NearestParkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

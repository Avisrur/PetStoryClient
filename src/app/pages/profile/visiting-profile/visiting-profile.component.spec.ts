import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitingProfileComponent } from './visiting-profile.component';

describe('VisitingProfileComponent', () => {
  let component: VisitingProfileComponent;
  let fixture: ComponentFixture<VisitingProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitingProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitingProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

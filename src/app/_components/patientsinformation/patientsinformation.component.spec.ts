import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientsinformationComponent } from './patientsinformation.component';

describe('PatientsinformationComponent', () => {
  let component: PatientsinformationComponent;
  let fixture: ComponentFixture<PatientsinformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientsinformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientsinformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

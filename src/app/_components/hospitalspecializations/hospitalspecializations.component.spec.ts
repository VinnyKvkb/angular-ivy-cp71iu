import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalspecializationsComponent } from './hospitalspecializations.component';

describe('HospitalspecializationsComponent', () => {
  let component: HospitalspecializationsComponent;
  let fixture: ComponentFixture<HospitalspecializationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HospitalspecializationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HospitalspecializationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

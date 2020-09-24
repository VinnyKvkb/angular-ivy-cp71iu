import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallerinformationComponent } from './callerinformation.component';

describe('CallerinformationComponent', () => {
  let component: CallerinformationComponent;
  let fixture: ComponentFixture<CallerinformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallerinformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallerinformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

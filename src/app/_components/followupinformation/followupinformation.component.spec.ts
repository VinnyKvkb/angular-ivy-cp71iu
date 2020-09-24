import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowupinformationComponent } from './followupinformation.component';

describe('FollowupinformationComponent', () => {
  let component: FollowupinformationComponent;
  let fixture: ComponentFixture<FollowupinformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FollowupinformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FollowupinformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConotificationsComponent } from './conotifications.component';

describe('ConotificationsComponent', () => {
  let component: ConotificationsComponent;
  let fixture: ComponentFixture<ConotificationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConotificationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

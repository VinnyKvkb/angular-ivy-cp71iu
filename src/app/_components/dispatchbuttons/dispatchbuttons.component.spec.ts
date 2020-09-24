import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DispatchbuttonsComponent } from './dispatchbuttons.component';

describe('DispatchbuttonsComponent', () => {
  let component: DispatchbuttonsComponent;
  let fixture: ComponentFixture<DispatchbuttonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DispatchbuttonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DispatchbuttonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

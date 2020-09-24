import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NearestongoingincidentsComponent } from './nearestongoingincidents.component';

describe('NearestongoingincidentsComponent', () => {
  let component: NearestongoingincidentsComponent;
  let fixture: ComponentFixture<NearestongoingincidentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NearestongoingincidentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NearestongoingincidentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

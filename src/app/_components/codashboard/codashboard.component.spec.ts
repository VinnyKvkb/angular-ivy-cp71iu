import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodashboardComponent } from './codashboard.component';

describe('CodashboardComponent', () => {
  let component: CodashboardComponent;
  let fixture: ComponentFixture<CodashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

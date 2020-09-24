import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoremarksComponent } from './coremarks.component';

describe('CoremarksComponent', () => {
  let component: CoremarksComponent;
  let fixture: ComponentFixture<CoremarksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoremarksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoremarksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

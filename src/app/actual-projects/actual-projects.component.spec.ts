import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualProjectsComponent } from './actual-projects.component';

describe('ActualProjectsComponent', () => {
  let component: ActualProjectsComponent;
  let fixture: ComponentFixture<ActualProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActualProjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

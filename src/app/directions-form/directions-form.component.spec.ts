import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectionsFormComponent } from './directions-form.component';

describe('DirectionsFormComponent', () => {
  let component: DirectionsFormComponent;
  let fixture: ComponentFixture<DirectionsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectionsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectionsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

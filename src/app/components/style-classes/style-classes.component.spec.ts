import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleClassesComponent } from './style-classes.component';

describe('StyleClassesComponent', () => {
  let component: StyleClassesComponent;
  let fixture: ComponentFixture<StyleClassesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StyleClassesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StyleClassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

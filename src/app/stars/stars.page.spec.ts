import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarsPage } from './stars.page';

describe('StarsPage', () => {
  let component: StarsPage;
  let fixture: ComponentFixture<StarsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

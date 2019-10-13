import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { StarCardComponent } from './star-card.component'

describe('StarCardComponent', () => {
  let component: StarCardComponent
  let fixture: ComponentFixture<StarCardComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StarCardComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(StarCardComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayDataInTemplateComponent } from './display-data-in-template.component';

describe('DisplayDataInTemplateComponent', () => {
  let component: DisplayDataInTemplateComponent;
  let fixture: ComponentFixture<DisplayDataInTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayDataInTemplateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayDataInTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FontSizerComponent } from './font-sizer.component';

describe('FontSizerComponent', () => {
  let component: FontSizerComponent;
  let fixture: ComponentFixture<FontSizerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FontSizerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FontSizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

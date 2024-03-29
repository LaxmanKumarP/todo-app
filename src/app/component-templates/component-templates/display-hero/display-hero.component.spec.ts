import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayHeroComponent } from './display-hero.component';

describe('DisplayHeroComponent', () => {
  let component: DisplayHeroComponent;
  let fixture: ComponentFixture<DisplayHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayHeroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

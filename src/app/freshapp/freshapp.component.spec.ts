import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreshappComponent } from './freshapp.component';

describe('FreshappComponent', () => {
  let component: FreshappComponent;
  let fixture: ComponentFixture<FreshappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreshappComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FreshappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

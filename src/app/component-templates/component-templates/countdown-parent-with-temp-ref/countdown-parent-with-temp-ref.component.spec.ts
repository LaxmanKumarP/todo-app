import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountdownParentWithTempRefComponent } from './countdown-parent-with-temp-ref.component';

describe('CountdownParentWithTempRefComponent', () => {
  let component: CountdownParentWithTempRefComponent;
  let fixture: ComponentFixture<CountdownParentWithTempRefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountdownParentWithTempRefComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountdownParentWithTempRefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

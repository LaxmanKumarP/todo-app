import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountdownParentWithViewchildComponent } from './countdown-parent-with-viewchild.component';

describe('CountdownParentWithViewchildComponent', () => {
  let component: CountdownParentWithViewchildComponent;
  let fixture: ComponentFixture<CountdownParentWithViewchildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountdownParentWithViewchildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountdownParentWithViewchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

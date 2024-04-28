import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OldTodoEditComponent } from './old-todo-edit.component';

describe('OldTodoEditComponent', () => {
  let component: OldTodoEditComponent;
  let fixture: ComponentFixture<OldTodoEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OldTodoEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OldTodoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

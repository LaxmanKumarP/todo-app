import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OldTodoListComponent } from './old-todo-list.component';

describe('OldTodoListComponent', () => {
  let component: OldTodoListComponent;
  let fixture: ComponentFixture<OldTodoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OldTodoListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OldTodoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

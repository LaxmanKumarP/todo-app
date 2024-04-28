import { TestBed } from '@angular/core/testing';

import { OldTodoService } from './old-todo.service';

describe('OldTodoService', () => {
  let service: OldTodoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OldTodoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

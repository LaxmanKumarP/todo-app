import { TestBed } from '@angular/core/testing';

import { NewtodoService } from './newtodo.service';

describe('NewtodoService', () => {
  let service: NewtodoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewtodoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

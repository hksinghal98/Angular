import { TestBed } from '@angular/core/testing';

import { GitSortService } from './git-sort.service';

describe('GitSortService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GitSortService = TestBed.get(GitSortService);
    expect(service).toBeTruthy();
  });
});

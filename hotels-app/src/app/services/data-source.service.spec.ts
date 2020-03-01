import { TestBed } from '@angular/core/testing';

import { DataSourceService } from './data-source.service';

describe('DataService', () => {
  let service: DataSourceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataSourceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

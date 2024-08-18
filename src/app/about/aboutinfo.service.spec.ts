import { TestBed } from '@angular/core/testing';

import { AboutinfoService } from './aboutinfo.service';

describe('AboutinfoService', () => {
  let service: AboutinfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AboutinfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

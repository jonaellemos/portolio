import { TestBed } from '@angular/core/testing';

import { AgendaVirtualService } from './agenda-virtual.service';

describe('AgendaVirtualService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AgendaVirtualService = TestBed.get(AgendaVirtualService);
    expect(service).toBeTruthy();
  });
});

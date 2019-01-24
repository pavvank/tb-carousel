import { TestBed } from '@angular/core/testing';

import { ComponentGenService } from './component-gen.service';

describe('ComponentGenService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ComponentGenService = TestBed.get(ComponentGenService);
    expect(service).toBeTruthy();
  });
});

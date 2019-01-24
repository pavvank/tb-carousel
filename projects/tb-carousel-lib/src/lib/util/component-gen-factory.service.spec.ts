import { TestBed } from '@angular/core/testing';

import { ComponentGenFactoryService } from './component-gen-factory.service';

describe('ComponentGenFactoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ComponentGenFactoryService = TestBed.get(ComponentGenFactoryService);
    expect(service).toBeTruthy();
  });
});

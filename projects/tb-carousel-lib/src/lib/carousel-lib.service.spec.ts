import { TestBed } from '@angular/core/testing';

import { TbCarouselLibService } from './carousel-lib.service';

describe('TbCarouselLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TbCarouselLibService = TestBed.get(TbCarouselLibService);
    expect(service).toBeTruthy();
  });
});

import { TestBed, inject } from '@angular/core/testing';

import { ProductsResolverService } from './products-resolver.service';

describe('ProductsResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductsResolverService]
    });
  });

  it('should be created', inject([ProductsResolverService], (service: ProductsResolverService) => {
    expect(service).toBeTruthy();
  }));
});

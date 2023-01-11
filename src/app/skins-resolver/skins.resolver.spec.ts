import { TestBed } from '@angular/core/testing';

import { SkinsResolver } from './skins.resolver';

describe('SkinsResolver', () => {
  let resolver: SkinsResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(SkinsResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});

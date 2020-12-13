import { TestBed } from '@angular/core/testing';

import { ExploredCampaignsService } from './explored-campaigns.service';

describe('ExploredCampaignsService', () => {
  let service: ExploredCampaignsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExploredCampaignsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

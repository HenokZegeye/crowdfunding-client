import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Campaign } from '../models/campaign.model';

export interface CampaignState extends EntityState<Campaign> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'campaigns', idKey: '_id' })
export class CampaignStore extends EntityStore<CampaignState> {
  constructor() {
    super();
  }

}

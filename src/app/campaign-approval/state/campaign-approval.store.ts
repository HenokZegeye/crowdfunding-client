import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';

export interface CampaignApprovalState extends EntityState<any> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'campaign-approvals' })
export class CampaignApprovalStore extends EntityStore<CampaignApprovalState> {
  constructor() {
    super();
  }

}

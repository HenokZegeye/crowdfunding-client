import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { CampaignApprovalStore, CampaignApprovalState } from './campaign-approval.store';

@Injectable({ providedIn: 'root' })
export class CampaignApprovalQuery extends QueryEntity<CampaignApprovalState> {

  constructor(protected store: CampaignApprovalStore) {
    super(store);
  }

}

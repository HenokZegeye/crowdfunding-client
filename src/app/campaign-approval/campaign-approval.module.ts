import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CampaignApprovalRoutingModule } from './campaign-approval-routing.module';
import { CampaignApprovalComponent } from './components/container/campaign-approval/campaign-approval.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [CampaignApprovalComponent],
  imports: [
    CommonModule,
    CampaignApprovalRoutingModule,
    SharedModule
  ]
})
export class CampaignApprovalModule { }

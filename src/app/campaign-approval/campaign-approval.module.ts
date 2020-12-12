import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CampaignApprovalRoutingModule } from './campaign-approval-routing.module';
import { CampaignApprovalComponent } from './components/container/campaign-approval/campaign-approval.component';


@NgModule({
  declarations: [CampaignApprovalComponent],
  imports: [
    CommonModule,
    CampaignApprovalRoutingModule
  ]
})
export class CampaignApprovalModule { }

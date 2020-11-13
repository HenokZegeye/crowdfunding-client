import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CampaignRoutingModule } from './campaign-routing.module';
import { CampaignEditorComponent } from './components/container/campaign-editor/campaign-editor.component';
import { FundraiserDashboardComponent } from './components/container/fundraiser-dashboard/fundraiser-dashboard.component';

import { SharedModule } from '../shared/shared.module';
import { MdComponentsModule } from '../md-components/md-components.module';
import { PComponentsModule } from '../p-components/p-components.module';
import { CampaignFormComponent } from './components/ui/campaign-form/campaign-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CampaignsComponent } from './components/container/campaigns/campaigns.component';


@NgModule({
  declarations: [
    CampaignEditorComponent,
    FundraiserDashboardComponent,
    CampaignFormComponent,
    CampaignsComponent
  ],
  imports: [
    CommonModule,
    CampaignRoutingModule,
    SharedModule,
    MdComponentsModule,
    PComponentsModule,
    ReactiveFormsModule
  ]
})
export class CampaignModule { }

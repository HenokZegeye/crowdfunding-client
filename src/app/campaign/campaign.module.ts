import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CampaignRoutingModule } from './campaign-routing.module';
import { CampaignEditorComponent } from './components/container/campaign-editor/campaign-editor.component';

import { SharedModule } from '../shared/shared.module';
import { MdComponentsModule } from '../md-components/md-components.module';
import { PComponentsModule } from '../p-components/p-components.module';
import { CampaignFormComponent } from './components/ui/campaign-form/campaign-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CampaignsComponent } from './components/container/campaigns/campaigns.component';
import { CampaignStatusComponent } from './components/container/campaign-status/campaign-status.component';
import { CampaignContentFormComponent } from './components/ui/campaign-content-form/campaign-content-form.component';
import { CampaignStatusCardComponent } from './components/ui/campaign-status-card/campaign-status-card.component';


@NgModule({
  declarations: [
    CampaignEditorComponent,
    CampaignFormComponent,
    CampaignsComponent,
    CampaignStatusComponent,
    CampaignContentFormComponent,
    CampaignStatusCardComponent
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

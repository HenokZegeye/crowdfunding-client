import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CampaignRoutingModule } from './campaign-routing.module';
import { CampaignEditorComponent } from './container/campaign-editor/campaign-editor.component';


@NgModule({
  declarations: [CampaignEditorComponent],
  imports: [
    CommonModule,
    CampaignRoutingModule
  ]
})
export class CampaignModule { }

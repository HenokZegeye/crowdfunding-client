import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CampaignRoutingModule } from './campaign-routing.module';
import { CampaignEditorComponent } from './components/container/campaign-editor/campaign-editor.component';
import { FundraiserDashboardComponent } from './components/container/fundraiser-dashboard/fundraiser-dashboard.component';
import {TabViewModule} from 'primeng/tabview';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    CampaignEditorComponent,
    FundraiserDashboardComponent
  ],
  imports: [
    CommonModule,
    CampaignRoutingModule,
    TabViewModule,
    MatCardModule,
    MatIconModule,
    SharedModule
  ]
})
export class CampaignModule { }

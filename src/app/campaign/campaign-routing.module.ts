import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CampaignEditorComponent } from './components/container/campaign-editor/campaign-editor.component';
import { CampaignStatusComponent } from './components/container/campaign-status/campaign-status.component';
import { CampaignsComponent } from './components/container/campaigns/campaigns.component';

const routes: Routes = [
  { path: '', component: CampaignsComponent },
  { path: 'editor', component: CampaignEditorComponent },
  { path: 'status', component: CampaignStatusComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CampaignRoutingModule { }

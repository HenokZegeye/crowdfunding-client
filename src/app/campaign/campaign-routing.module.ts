import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CampaignEditorComponent } from './components/container/campaign-editor/campaign-editor.component';
import { CampaignsComponent } from './components/container/campaigns/campaigns.component';

const routes: Routes = [
  { path: '', component: CampaignsComponent},
  { path: 'campaign-editor', component: CampaignEditorComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CampaignRoutingModule { }

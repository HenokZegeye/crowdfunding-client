import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CampaignEditorComponent } from './components/container/campaign-editor/campaign-editor.component';
import { FundraiserDashboardComponent } from './components/container/fundraiser-dashboard/fundraiser-dashboard.component';

const routes: Routes = [
  { path: '', component: FundraiserDashboardComponent},
  { path: 'campaign-editor', component: CampaignEditorComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CampaignRoutingModule { }

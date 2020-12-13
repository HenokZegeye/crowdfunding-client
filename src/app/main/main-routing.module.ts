import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'campaign', loadChildren: () => import('../campaign/campaign.module').then(m => m.CampaignModule),
  },
  {
    path: 'campaign-approval', loadChildren: () => import('../campaign-approval/campaign-approval.module').then(m => m.CampaignApprovalModule),
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }

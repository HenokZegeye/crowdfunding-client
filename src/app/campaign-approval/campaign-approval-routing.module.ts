import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OuterLayoutComponent } from '../main/components/container/outer-layout/outer-layout.component';
import { CampaignApprovalComponent } from './components/container/campaign-approval/campaign-approval.component';

const routes: Routes = [
  {
    path: '',
    component: OuterLayoutComponent,
    children: [
      { path: '', component:  CampaignApprovalComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CampaignApprovalRoutingModule { }

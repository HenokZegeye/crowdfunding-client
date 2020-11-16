import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from '../main/components/container/layout/layout.component';
import { OuterLayoutComponent } from '../main/components/container/outer-layout/outer-layout.component';
import { CampaignEditorComponent } from './components/container/campaign-editor/campaign-editor.component';
import { CampaignStatusComponent } from './components/container/campaign-status/campaign-status.component';
import { CampaignsComponent } from './components/container/campaigns/campaigns.component';

const routes: Routes = [
  {
    path: '',
    component: OuterLayoutComponent,
    children: [
      { path: '', component: CampaignsComponent }
    ]
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'editor', component: CampaignEditorComponent }
    ]
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'status', component: CampaignStatusComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CampaignRoutingModule { }

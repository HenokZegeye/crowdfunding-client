import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OuterLayoutComponent } from '../main/components/container/outer-layout/outer-layout.component';
import { CampaignDonateComponent } from './components/container/campaign-donate/campaign-donate.component';

const routes: Routes = [
  {
    path: '',
    component: OuterLayoutComponent,
    children: [
      { path: '', component: CampaignDonateComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DonationRoutingModule { }

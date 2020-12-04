import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DonationRoutingModule } from './donation-routing.module';
import { CampaignDonateComponent } from './components/container/campaign-donate/campaign-donate.component';


@NgModule({
  declarations: [CampaignDonateComponent],
  imports: [
    CommonModule,
    DonationRoutingModule
  ]
})
export class DonationModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DonationRoutingModule } from './donation-routing.module';
import { CampaignDonateComponent } from './components/container/campaign-donate/campaign-donate.component';
import { MatCardModule } from '@angular/material/card';
import { PComponentsModule } from '../p-components/p-components.module';
import { MdComponentsModule } from '../md-components/md-components.module';


@NgModule({
  declarations: [CampaignDonateComponent],
  imports: [
    CommonModule,
    DonationRoutingModule,
    MdComponentsModule,
    PComponentsModule
  ]
})
export class DonationModule { }

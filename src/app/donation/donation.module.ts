import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DonationRoutingModule } from './donation-routing.module';
import { CampaignDonateComponent } from './components/container/campaign-donate/campaign-donate.component';
import { PComponentsModule } from '../p-components/p-components.module';
import { MdComponentsModule } from '../md-components/md-components.module';
import { DonationFormComponent } from './components/ui/donation-form/donation-form.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [CampaignDonateComponent, DonationFormComponent],
  imports: [
    CommonModule,
    DonationRoutingModule,
    MdComponentsModule,
    PComponentsModule,
    ReactiveFormsModule
  ]
})
export class DonationModule { }

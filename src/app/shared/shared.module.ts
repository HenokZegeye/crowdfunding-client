import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CampaignCardComponent } from './components/campaign-card/campaign-card.component';
import { MdComponentsModule } from '../md-components/md-components.module';



@NgModule({
  declarations: [CampaignCardComponent],
  exports: [
    CampaignCardComponent
  ],
  imports: [
    CommonModule,
    MdComponentsModule
  ]
})
export class SharedModule { }

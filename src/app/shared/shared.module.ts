import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CampaignCardComponent } from './components/campaign-card/campaign-card.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [CampaignCardComponent],
  exports: [
    CampaignCardComponent
  ],
  imports: [
    CommonModule,
    MatProgressBarModule,
    MatCardModule
  ]
})
export class SharedModule { }

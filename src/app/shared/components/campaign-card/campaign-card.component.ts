import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-campaign-card',
  templateUrl: './campaign-card.component.html',
  styleUrls: ['./campaign-card.component.scss']
})
export class CampaignCardComponent implements OnInit {
  @Input() campaign;
  @Input() noHeader;
  @Input() noFooter;
  year = new Date();
  @Input() photoPath;
  @Output() clickCampaign = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
    this.photoPath = `${environment.apiUrl}/${this.campaign.campaign_imageUrl}`;
  }

  onCampaignClick(campaign) {
    this.clickCampaign.emit(campaign);
  }

}

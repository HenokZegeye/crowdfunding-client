import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

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
  @Output() clickCampaign = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  onCampaignClick(campaign) {
    this.clickCampaign.emit(campaign);
  }

}

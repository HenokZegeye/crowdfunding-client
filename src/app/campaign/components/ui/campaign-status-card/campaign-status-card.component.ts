import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-campaign-status-card',
  templateUrl: './campaign-status-card.component.html',
  styleUrls: ['./campaign-status-card.component.scss']
})
export class CampaignStatusCardComponent implements OnInit {
  @Input() campaign;

  constructor() { }

  ngOnInit(): void {
  }

}

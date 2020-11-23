import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-campaign-status',
  templateUrl: './campaign-status.component.html',
  styleUrls: ['./campaign-status.component.scss']
})
export class CampaignStatusComponent implements OnInit {
  date = new Date();

  @Input() campaign;

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-campaign-detail',
  templateUrl: './campaign-detail.component.html',
  styleUrls: ['./campaign-detail.component.scss']
})
export class CampaignDetailComponent implements OnInit {
  campaign;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.campaign = data;
    debugger
  }

  ngOnInit(): void {
  }

}

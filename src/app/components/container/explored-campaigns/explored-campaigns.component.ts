import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-explored-campaigns',
  templateUrl: './explored-campaigns.component.html',
  styleUrls: ['./explored-campaigns.component.scss']
})
export class ExploredCampaignsComponent implements OnInit {
  category;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(param => {
      this.category = param.category;
      //Fetch campaign using category
    });
  }

}

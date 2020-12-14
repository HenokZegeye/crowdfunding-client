import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExploredCampaignsService } from '../../../state/explored-campaigns.service';

@Component({
  selector: 'app-explored-campaigns',
  templateUrl: './explored-campaigns.component.html',
  styleUrls: ['./explored-campaigns.component.scss']
})
export class ExploredCampaignsComponent implements OnInit {
  category;
  campaigns: any[] = [];
  constructor(private route: ActivatedRoute,
              private service: ExploredCampaignsService,
              private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(param => {
      this.category = param.category;
      this.service.getCampaigns(this.category).subscribe(res => {
        this.campaigns = res.campaign;
      });
      //Fetch campaign using category
    });
  }

  onDetail(campaign) {
    const id = campaign._id;
    this.router.navigate(['donation'], {queryParams: {id} })
  }

}

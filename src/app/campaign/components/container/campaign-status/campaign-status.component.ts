import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Campaign } from 'src/app/campaign/models/campaign.model';
import { CampaignQuery } from 'src/app/campaign/state/campaign.query';
import { CampaignService } from 'src/app/campaign/state/campaign.service';

@Component({
  selector: 'app-campaign-status',
  templateUrl: './campaign-status.component.html',
  styleUrls: ['./campaign-status.component.scss']
})
export class CampaignStatusComponent implements OnInit {
  date = new Date();

  campaign$: Observable<any> = this.query.selectCurrentCampaign();

  constructor(private query: CampaignQuery,
              private route: ActivatedRoute,
              private service: CampaignService) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      params => {
        this.service.show(params.id).subscribe();
      }
    );
  }

}

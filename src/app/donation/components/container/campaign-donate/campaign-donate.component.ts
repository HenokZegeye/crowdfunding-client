import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../../../../environments/environment';
import { CampaignService } from '../../../../campaign/state/campaign.service';
import { UtilService } from '../../../../shared/services/util.service';
import { DonationFormComponent } from '../../ui/donation-form/donation-form.component';

@Component({
  selector: 'app-campaign-donate',
  templateUrl: './campaign-donate.component.html',
  styleUrls: ['./campaign-donate.component.scss']
})
export class CampaignDonateComponent implements OnInit {
  campaign;
  coverPhotoPath;
  constructor(private campaignService: CampaignService,
              private route: ActivatedRoute,
              private utilService: UtilService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(queryParams=>{
      const id = queryParams['id'];
      this.campaignService.show(id).subscribe(res=>{
        this.campaign = res;
        this.coverPhotoPath = `${environment.apiUrl}/${this.campaign.campaign_imageUrl}`;
      });
    });
  }

  onDonate() {
    const dialogRef = this.utilService.openDialog(DonationFormComponent,undefined, '500px');
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../../../../environments/environment';
import { CampaignService } from '../../../../campaign/state/campaign.service';
import { UtilService } from '../../../../shared/services/util.service';
import { DonationFormComponent } from '../../ui/donation-form/donation-form.component';
import { DonationService } from '../../../state/donation.service';

@Component({
  selector: 'app-campaign-donate',
  templateUrl: './campaign-donate.component.html',
  styleUrls: ['./campaign-donate.component.scss']
})
export class CampaignDonateComponent implements OnInit {
  campaign;
  coverPhotoPath;
  dialogRef;
  constructor(private campaignService: CampaignService,
              private route: ActivatedRoute,
              private utilService: UtilService,
              private donationService: DonationService) { }

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
    this.dialogRef = this.utilService.openDialog(DonationFormComponent,undefined, '500px');
    const submitSub = (this.dialogRef.componentInstance as any).formSubmit.subscribe(data => {
      this.onSubmit(data);
      this.dialogRef.close();
    });

    const closeSub = (this.dialogRef.componentInstance as any).formClose.subscribe(() => this.dialogRef.close());

    this.dialogRef.afterClosed().subscribe(() => {
      submitSub.unsubscribe();
      closeSub.unsubscribe();
    });
  }

  onSubmit(data) {
    const campaignId = this.campaign._id;
    this.donationService.donate(campaignId, data).subscribe(res=>{
      //Update state based on the donation amount
    });
  }

}

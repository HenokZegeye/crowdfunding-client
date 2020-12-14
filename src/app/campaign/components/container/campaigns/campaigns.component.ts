import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogConfig } from 'src/app/shared/models/dialog-config.model';
import { DialogService } from 'src/app/shared/services/dialog.service';
import { CampaignFormComponent } from '../../ui/campaign-form/campaign-form.component';
import { CampaignService } from '../../../state/campaign.service';
import { CampaignQuery } from '../../../state/campaign.query';
import { Campaign } from 'src/app/campaign/models/campaign.model';
import { Observable } from 'rxjs';
import { CampaignDetailComponent } from '../campaign-detail/campaign-detail.component';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-campaigns',
  templateUrl: './campaigns.component.html',
  styleUrls: ['./campaigns.component.scss']
})
export class CampaignsComponent implements OnInit {
  campaigns = [];

  dialogConfig: DialogConfig = {
    width: '800px',
    formComponent: CampaignFormComponent,
    dialog: this.dialog,
    parentComponent: this,
    service: this.service
  } as DialogConfig;

  campaigns$: Observable<Campaign[]> = this.query.selectAll();

  constructor(private dialog: MatDialog,
    private service: CampaignService,
    private query: CampaignQuery) { }

  ngOnInit(): void {
    this.service.get().subscribe();
  }

  onCreateCampaign() {
    this.dialogConfig.title = 'Add New Campaign';
    this.dialogConfig.formData = {};
    DialogService.handleDialog(this.dialogConfig);
  }

  onCampaignDetail(campaign) {
    this.service.setActive(campaign._id);
    this.dialog.open(CampaignDetailComponent, {
      width: '2000px',
      data: campaign,
      height: '700px'
    });
  }
}

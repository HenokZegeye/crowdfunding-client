import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogConfig } from 'src/app/shared/models/dialog-config.model';
import { DialogService } from 'src/app/shared/services/dialog.service';
import { CampaignFormComponent } from '../../ui/campaign-form/campaign-form.component';
import { CampaignService } from '../../../state/campaign.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-campaigns',
  templateUrl: './campaigns.component.html',
  styleUrls: ['./campaigns.component.scss']
})
export class CampaignsComponent implements OnInit {
  date = Date.now();

  campaigns = [
    { title: 'Card1' },
    { title: 'Card2' },
    { title: 'Card3' },
    { title: 'Card4' },
    { title: 'Card5' },
    { title: 'Card6' },
    { title: 'Card7' },
    { title: 'Card8' },
    { title: 'Card9' },
  ];

  dialogConfig: DialogConfig = {
    width: '800px',
    formComponent: CampaignFormComponent,
    dialog: this.dialog,
    parentComponent: this,
    service: this.service
  } as DialogConfig;

  constructor(private dialog: MatDialog,
    private service: CampaignService,
    private router: Router) { }

  ngOnInit(): void {
    this.service.get().subscribe((res) => {
      this.campaigns = res;
    });
  }

  onCreateCampaign() {
    this.dialogConfig.title = 'Add New Campaign';
    this.dialogConfig.formData = {};
    DialogService.handleDialog(this.dialogConfig);
  }

  onCampaignDetail(campaign) {
    this.router.navigate(['/main/campaign/status']);
  }
}

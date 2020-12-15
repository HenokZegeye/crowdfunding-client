import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CampaignApprovalQuery } from '../../../state/campaign-approval.query';
import { CampaignApprovalService } from '../../../state/campaign-approval.service';

@Component({
  selector: 'app-campaign-approval',
  templateUrl: './campaign-approval.component.html',
  styleUrls: ['./campaign-approval.component.scss']
})
export class CampaignApprovalComponent implements OnInit {

  columns = [
    { name: 'campaign_title', label: 'Title' },
    { name: 'campaign_category', label: 'Category' },
    { name: 'campaign_fundGoal', label: 'Fund Goal' },
    { name: 'campaign_endingDate', label: 'Ending Date', type: 'date' }
  ];

  tableActions = [
    { icon: 'check_circle_outline', color: 'primary', tooltip: 'Approve'},
    { icon: 'thumb_down', color: 'warn', tooltip: 'Decline'}
  ];

  campaigns$: Observable<any[]> = this.query.selectAll();

  constructor(private query: CampaignApprovalQuery,
              private service: CampaignApprovalService) { }

  ngOnInit(): void {
    this.service.getUnapprovedCampaign().subscribe();
  }

  onClick(event) {
    switch (event.type) {
      case 'check_circle_outline':
        this.onApprove(event.item);
        break;
      case 'check_circle_outline':
        this.onDecline(event.item);
        break;
      default:
        break;
    }
  }

  onApprove(item) {
    const id = item._id;
    this.service.approveCampaign(id).subscribe();
  }

  onDecline(item) {
    const id = item._id;
    this.service.declineCampaign(id).subscribe();
  }



}

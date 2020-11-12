import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { MatDialog } from '@angular/material/dialog';
import { CampaignFormComponent } from '../../ui/campaign-form/campaign-form.component';
import { DialogConfig } from 'src/app/shared/models/dialog-config.model';
import { DialogService } from 'src/app/shared/services/dialog.service';

@Component({
  selector: 'app-fundraiser-dashboard',
  templateUrl: './fundraiser-dashboard.component.html',
  styleUrls: ['./fundraiser-dashboard.component.scss']
})
export class FundraiserDashboardComponent {
  date = Date.now();
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Welcome' },
        ];
      }

      return [
        { title: 'Welcome' },
      ];
    })
  );

  campaigns = [
    {title: 'Card1'},
    {title: 'Card2'},
    {title: 'Card3'},
    {title: 'Card4'},
    {title: 'Card5'}
  ];

  dialogConfig: DialogConfig = {
    width: '500px',
    formComponent: CampaignFormComponent,
    dialog: this.dialog,
    parentComponent: this
  } as DialogConfig;

  constructor(private breakpointObserver: BreakpointObserver,
              private dialog: MatDialog) {}


  onCreateCampaign() {
    this.dialogConfig.title = 'Add New Campaign';
    this.dialogConfig.formData = {};
    DialogService.handleDialog(this.dialogConfig);
  }
}

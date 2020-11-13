import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { map } from 'rxjs/operators';
import { DialogConfig } from 'src/app/shared/models/dialog-config.model';
import { DialogService } from 'src/app/shared/services/dialog.service';
import { CampaignFormComponent } from '../../ui/campaign-form/campaign-form.component';

@Component({
  selector: 'app-campaigns',
  templateUrl: './campaigns.component.html',
  styleUrls: ['./campaigns.component.scss']
})
export class CampaignsComponent implements OnInit {
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

 @Input() campaigns;

  dialogConfig: DialogConfig = {
    width: '800px',
    formComponent: CampaignFormComponent,
    dialog: this.dialog,
    parentComponent: this
  } as DialogConfig;

  constructor(private breakpointObserver: BreakpointObserver,
              private dialog: MatDialog) {}

  ngOnInit(): void {
  }

  onCreateCampaign() {
    this.dialogConfig.title = 'Add New Campaign';
    this.dialogConfig.formData = {};
    DialogService.handleDialog(this.dialogConfig);
  }
}

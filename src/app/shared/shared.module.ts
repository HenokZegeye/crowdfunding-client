import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CampaignCardComponent } from './components/campaign-card/campaign-card.component';
import { MdComponentsModule } from '../md-components/md-components.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { SidebarModule } from '@syncfusion/ej2-angular-navigations';
import { ListComponent } from './components/list/list.component';

@NgModule({
  declarations: [
    CampaignCardComponent,
    ListComponent
  ],
  exports: [
    CampaignCardComponent
  ],
  imports: [
    CommonModule,
    MdComponentsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatMenuModule,
    SidebarModule,
  ],
})
export class SharedModule { }

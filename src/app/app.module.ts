import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { NG_ENTITY_SERVICE_CONFIG } from '@datorama/akita-ng-entity-service';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { environment } from '../environments/environment';
import { LandingComponent } from './components/container/landing/landing.component';
import { MainModule } from './main/main.module';
import { SharedModule } from './shared/shared.module';
import { MessageService } from 'primeng/api';
import { ExploredCampaignsComponent } from './components/container/explored-campaigns/explored-campaigns.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    ExploredCampaignsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    HttpClientModule,
    MainModule,
    environment.production ? [] : AkitaNgDevtools.forRoot(),
    SharedModule
  ],
  providers: [
    { provide: NG_ENTITY_SERVICE_CONFIG, useValue: { baseUrl: 'https://jsonplaceholder.typicode.com' }},
    MessageService
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }

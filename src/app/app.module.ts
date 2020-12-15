import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
import { ReactiveFormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { BlockUIModule } from 'ng-block-ui';

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
    ReactiveFormsModule,
    MainModule,
    environment.production ? [] : AkitaNgDevtools.forRoot(),
    SharedModule,
    ToastModule,
    BlockUIModule.forRoot(),
  ],
  providers: [
    { provide: NG_ENTITY_SERVICE_CONFIG, useValue: { baseUrl: 'https://jsonplaceholder.typicode.com' }},
    MessageService
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }

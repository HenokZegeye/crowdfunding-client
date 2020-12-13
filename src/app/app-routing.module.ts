import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExploredCampaignsComponent } from './components/container/explored-campaigns/explored-campaigns.component';
import { LandingComponent } from './components/container/landing/landing.component';
import { OuterLayoutComponent } from './main/components/container/outer-layout/outer-layout.component';

const routes: Routes = [
  {
    path: '',
    component: OuterLayoutComponent,
    children: [
      { path: '', component: LandingComponent},
      { path: 'campaigns/:category', component: ExploredCampaignsComponent }
    ]
  },
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)},
  { path: 'main', loadChildren: () => import('./main/main.module').then(m => m.MainModule)},
  { path: 'donation', loadChildren: () => import('./donation/donation.module').then(m => m.DonationModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

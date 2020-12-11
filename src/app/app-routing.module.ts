import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './components/container/landing/landing.component';
import { OuterLayoutComponent } from './main/components/container/outer-layout/outer-layout.component';

const routes: Routes = [
  {
    path: '',
    component: OuterLayoutComponent,
    children: [
      { path: '', component: LandingComponent}
    ]
  },
  { path: 'main', loadChildren: () => import('./main/main.module').then(m => m.MainModule)},
  { path: 'donation', loadChildren: () => import('./donation/donation.module').then(m => m.DonationModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/container/login/login.component';
import { SignUpComponent } from './components/container/sign-up/sign-up.component';

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'sign-up', component: SignUpComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }

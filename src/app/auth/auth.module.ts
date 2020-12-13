import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/container/login/login.component';
import { LoginFormComponent } from './components/ui/login-form/login-form.component';
import { MdComponentsModule } from '../md-components/md-components.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SignUpComponent } from './components/container/sign-up/sign-up.component';
import { SignUpFormComponent } from './components/ui/sign-up-form/sign-up-form.component';


@NgModule({
  declarations: [LoginComponent, LoginFormComponent, SignUpComponent, SignUpFormComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MdComponentsModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }

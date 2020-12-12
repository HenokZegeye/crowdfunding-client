import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/container/login/login.component';
import { LoginFormComponent } from './components/ui/login-form/login-form.component';
import { MdComponentsModule } from '../md-components/md-components.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [LoginComponent, LoginFormComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MdComponentsModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }

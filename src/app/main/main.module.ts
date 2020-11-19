import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { HeaderComponent } from '../main/components/ui/header/header.component';
import { FooterComponent } from '../main/components/ui/footer/footer.component';
import { LayoutComponent } from './components/container/layout/layout.component';
import { ListViewModule } from '@syncfusion/ej2-angular-lists';
import { MenuModule, SidebarModule } from '@syncfusion/ej2-angular-navigations';
import { MdComponentsModule } from '../md-components/md-components.module';
import { OuterLayoutComponent } from './components/container/outer-layout/outer-layout.component';

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    OuterLayoutComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    ListViewModule,
    MenuModule,
    SidebarModule,
    MdComponentsModule
  ],
  exports: [
    OuterLayoutComponent,
    LayoutComponent
  ]
})
export class MainModule { }

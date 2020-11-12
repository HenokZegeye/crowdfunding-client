import { NgModule } from '@angular/core';
import {TabViewModule} from 'primeng/tabview';
import { FileUploadModule } from 'primeng/fileupload';

@NgModule({
  declarations: [],
  exports: [
    TabViewModule,
    FileUploadModule
  ]
})
export class PComponentsModule { }

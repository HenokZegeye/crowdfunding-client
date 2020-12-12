import { NgModule } from '@angular/core';
import {TabViewModule} from 'primeng/tabview';
import { FileUploadModule } from 'primeng/fileupload';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';

@NgModule({
  declarations: [],
  exports: [
    TabViewModule,
    FileUploadModule,
    TableModule,
    DropdownModule
  ]
})
export class PComponentsModule { }

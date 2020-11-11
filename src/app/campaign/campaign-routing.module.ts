import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CampaignEditorComponent } from './container/campaign-editor/campaign-editor.component';

const routes: Routes = [
  { path: 'campaign-editor', component: CampaignEditorComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CampaignRoutingModule { }

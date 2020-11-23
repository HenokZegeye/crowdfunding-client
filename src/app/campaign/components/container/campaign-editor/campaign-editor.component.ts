import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-campaign-editor',
  templateUrl: './campaign-editor.component.html',
  styleUrls: ['./campaign-editor.component.scss']
})
export class CampaignEditorComponent implements OnInit {
  @Input() campaign;

  constructor() {
  }

  ngOnInit(): void {
  }

}

import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { SidebarComponent } from '@syncfusion/ej2-angular-navigations';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class CustomSidebarComponent implements OnInit {
  @ViewChild('dockBar') dockBar: SidebarComponent;
  public enableDock: boolean = true;
  public width: string = '220px';
  public dockSize: string = '72px';
  @Input() content;

  constructor() { }

  ngOnInit(): void {
  }

  toggleClick() {
    this.dockBar.toggle();
  }

}

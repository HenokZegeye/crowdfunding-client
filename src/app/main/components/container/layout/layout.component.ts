import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuEventArgs, SidebarComponent } from '@syncfusion/ej2-angular-navigations';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  @ViewChild('sidebarMenuInstance') sidebarMenuInstance: SidebarComponent;
  menus = [
    { text: 'Campaign Status', iconCss: 'e-icons e-campaign-status', }
  ]

  constructor(private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  onToggle(): void {
    this.sidebarMenuInstance.toggle();
  }

  onLogout() {
    // this.service.logout();
    this.router.navigate(['/login']);
  }

  onSelect(event: MenuEventArgs) {
    event.event.preventDefault();
    const item = event.item;
    if (item.url) {
      this.router.navigate([item.url], { relativeTo: this.route });
    }
  }

}

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
  id;
  menus = [];

  constructor(private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((res: any) => {
      this.id = res.id;
      this.menus.push(
        { text: 'Campaign Status', iconCss: 'e-icons e-campaign-status', url: `/main/campaign/status/${this.id}` },
        { text: 'Campaign Editor', iconCss: 'e-icons e-edit', url: `/main/campaign/editor/${this.id}` },
      )
    });
  }

  onToggle(): void {
    this.sidebarMenuInstance.toggle();
  }

  onLogout() {
    // this.service.logout();
    this.router.navigate(['/']);
  }

  onSelect(event: MenuEventArgs) {
    event.event.preventDefault();
    const item = event.item;
    if (item.url) {
      this.router.navigate([item.url], { relativeTo: this.route });
    }
  }

}

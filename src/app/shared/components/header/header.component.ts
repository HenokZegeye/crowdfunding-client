import { Component, Input, OnInit } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() sidenav;
  userName = 'Abebe Kebede';

  constructor(private router: Router, public media: MediaObserver) { }

  ngOnInit(): void {
  }

  onLogout() {
    localStorage.clear();
    this.router.navigate(['/welcome']);
  }

}

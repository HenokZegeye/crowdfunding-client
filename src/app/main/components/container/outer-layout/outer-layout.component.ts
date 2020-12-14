import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-outer-layout',
  templateUrl: './outer-layout.component.html',
  styleUrls: ['./outer-layout.component.scss']
})
export class OuterLayoutComponent implements OnInit {
  username = 'Abebe K.';
  isLoggedIn: boolean;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.username = localStorage.getItem('userName');
    this.isLoggedIn = localStorage.getItem('userToken') ? true : false;
  }

  onLogout() {
    localStorage.clear();
    this.router.navigate(['/']);
  }

  onExplore(event) {
    this.router.navigate(['/campaigns', event])
  }

}

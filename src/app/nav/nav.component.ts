import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';
import { MediaObserver } from '@angular/flex-layout';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  userName = '';
  constructor(private router: Router, public media: MediaObserver) {}

  ngOnInit() {
    this.userName = localStorage.getItem('userName');
  }

  onLogout() {
    localStorage.clear();
    this.router.navigate(['/welcome']);
  }

}

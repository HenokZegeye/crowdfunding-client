import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SessionQuery } from '../../../../auth/state/session.query';

@Component({
  selector: 'app-outer-layout',
  templateUrl: './outer-layout.component.html',
  styleUrls: ['./outer-layout.component.scss']
})
export class OuterLayoutComponent implements OnInit {
  username = 'Abebe K.';
  isLoggedIn: boolean;


  session$: Observable<any> = this.sessionQuery.selectAll();

  constructor(private router: Router, private sessionQuery: SessionQuery) { }

  ngOnInit(): void {
    this.username = localStorage.getItem('userName');
    this.session$.subscribe(res=>{
      debugger
    })
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

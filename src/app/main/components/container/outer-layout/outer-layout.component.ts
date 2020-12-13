import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-outer-layout',
  templateUrl: './outer-layout.component.html',
  styleUrls: ['./outer-layout.component.scss']
})
export class OuterLayoutComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onLogout() {
    this.router.navigate(['/']);
  }

}

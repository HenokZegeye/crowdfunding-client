import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() title: string;
  @Input() username: string;
  @Input() noToggle: boolean;
  @Input() isLogggedIn: boolean;


  @Output() toggle = new EventEmitter<void>();
  @Output() logout = new EventEmitter<boolean>();
  @Output() explore = new EventEmitter<string>();

  selectedCategory;

  categories: any[] = [
    {name: 'Medicine'},
    {name: 'Education'},
    {name: 'Charity'},
    {name: 'Memorial'}
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onExplore(event) {
    this.explore.emit(event.name);
  }

  onSignIn() {
    this.router.navigate(['/auth']);
  }

  onStartCampaign() {
    this.router.navigate(['/auth/sign-up'])
  }

  onToggle(): void {
    this.toggle.emit();
  }

  onLogout(val: boolean = true): void {
    this.logout.emit(val);
  }
}

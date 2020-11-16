import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() title: string;
  @Input() username: string;

  @Output() toggle = new EventEmitter<void>();
  @Output() logout = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  onToggle(): void {
    this.toggle.emit();
  }

  onLogout(val: boolean = true): void {
    this.logout.emit(val);
  }
}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() title: string;
  @Input() username: string;
  @Input() noToggle: boolean;

  @Output() toggle = new EventEmitter<void>();
  @Output() logout = new EventEmitter<boolean>();

  selectedCategory;

  categories: any[] = [
    { name: 'Health', value: 'health'},
    { name: 'Education', value: 'education'},
    { name: 'Art', value: 'art'}
  ];

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

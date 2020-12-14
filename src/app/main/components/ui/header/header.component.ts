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
  @Output() explore = new EventEmitter<string>();

  selectedCategory;

  categories: any[] = [
    {name: 'Medicine'},
    {name: 'Education'},
    {name: 'Charity'},
    {name: 'Memorial'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onExplore(event) {
    this.explore.emit(event.name);
  }

  onToggle(): void {
    this.toggle.emit();
  }

  onLogout(val: boolean = true): void {
    this.logout.emit(val);
  }
}

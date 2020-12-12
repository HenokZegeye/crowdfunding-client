import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Column } from '../../models/column.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() data: any;
  @Input() columns: Column[];
  @Input() caption: string;
  @Input() actions: any;
  @Input() checkbox: boolean;
  @Input() hasAction: boolean;
  @Input() loading: boolean;
  @Input() checkedData: any[];
  @Input() columnFilterOptions = [];


  @Output() actionClick = new EventEmitter<any>();
  @Output() selectedData = new EventEmitter<any[]>();


  constructor() { }

  ngOnInit(): void {
  }

  onClick(item, type) {
    this.actionClick.emit({item, type});
  }

  onSelect() {
    this.selectedData.emit(this.checkedData);
  }
}

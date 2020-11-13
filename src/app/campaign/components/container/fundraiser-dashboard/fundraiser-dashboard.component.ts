import { Component } from '@angular/core';

@Component({
  selector: 'app-fundraiser-dashboard',
  templateUrl: './fundraiser-dashboard.component.html',
  styleUrls: ['./fundraiser-dashboard.component.scss']
})
export class FundraiserDashboardComponent {
  campaigns = [
    {title: 'Card1'},
    {title: 'Card2'},
    {title: 'Card3'},
    {title: 'Card4'},
    {title: 'Card5'}
  ];
}

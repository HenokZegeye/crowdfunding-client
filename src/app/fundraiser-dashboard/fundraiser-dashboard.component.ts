import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-fundraiser-dashboard',
  templateUrl: './fundraiser-dashboard.component.html',
  styleUrls: ['./fundraiser-dashboard.component.scss']
})
export class FundraiserDashboardComponent {
  date = Date.now();
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Welcome' },
        ];
      }

      return [
        { title: 'Welcome' },
      ];
    })
  );

  items = [
    {title: 'Card1'},
    {title: 'Card2'},
    {title: 'Card3'},
    {title: 'Card4'},
    {title: 'Card5'}
  ];

  constructor(private breakpointObserver: BreakpointObserver) {}
}

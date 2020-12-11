import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  campaigns = [
    { campaign_title: 'Campaign One', campaign_tagline: 'This is campaign one', campaign_story: 'Campaign one story is here', progress_percentage: 40, campaign_fundGoal: 4000, campaign_category: 'Medicine', campaign_endingDate: Date()},
    { campaign_title: 'Campaign One', campaign_tagline: 'This is campaign one', campaign_story: 'Campaign one story is here', progress_percentage: 40, campaign_fundGoal: 4000, campaign_category: 'Medicine', campaign_endingDate: Date()},
    { campaign_title: 'Campaign One', campaign_tagline: 'This is campaign one', campaign_story: 'Campaign one story is here', progress_percentage: 40, campaign_fundGoal: 4000, campaign_category: 'Medicine', campaign_endingDate: Date()},
    { campaign_title: 'Campaign One', campaign_tagline: 'This is campaign one', campaign_story: 'Campaign one story is here', progress_percentage: 40, campaign_fundGoal: 4000, campaign_category: 'Medicine', campaign_endingDate: Date()},
    { campaign_title: 'Campaign One', campaign_tagline: 'This is campaign one', campaign_story: 'Campaign one story is here', progress_percentage: 40, campaign_fundGoal: 4000, campaign_category: 'Medicine', campaign_endingDate: Date()},
    { campaign_title: 'Campaign One', campaign_tagline: 'This is campaign one', campaign_story: 'Campaign one story is here', progress_percentage: 40, campaign_fundGoal: 4000, campaign_category: 'Medicine', campaign_endingDate: Date()},
  ];
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onCampaignDetail() {
    this.router.navigate(['donation']);
  }

}

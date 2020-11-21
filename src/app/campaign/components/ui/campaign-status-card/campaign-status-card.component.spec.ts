import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignStatusCardComponent } from './campaign-status-card.component';

describe('CampaignStatusCardComponent', () => {
  let component: CampaignStatusCardComponent;
  let fixture: ComponentFixture<CampaignStatusCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampaignStatusCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaignStatusCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

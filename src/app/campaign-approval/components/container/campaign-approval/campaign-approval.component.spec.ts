import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignApprovalComponent } from './campaign-approval.component';

describe('CampaignApprovalComponent', () => {
  let component: CampaignApprovalComponent;
  let fixture: ComponentFixture<CampaignApprovalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampaignApprovalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaignApprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploredCampaignsComponent } from './explored-campaigns.component';

describe('ExploredCampaignsComponent', () => {
  let component: ExploredCampaignsComponent;
  let fixture: ComponentFixture<ExploredCampaignsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExploredCampaignsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExploredCampaignsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

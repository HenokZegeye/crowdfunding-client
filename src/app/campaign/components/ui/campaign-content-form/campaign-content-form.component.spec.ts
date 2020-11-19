import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignContentFormComponent } from './campaign-content-form.component';

describe('CampaignContentFormComponent', () => {
  let component: CampaignContentFormComponent;
  let fixture: ComponentFixture<CampaignContentFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampaignContentFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaignContentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

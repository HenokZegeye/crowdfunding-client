import { LayoutModule } from '@angular/cdk/layout';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FundraiserDashboardComponent } from './fundraiser-dashboard.component';

describe('FundraiserDashboardComponent', () => {
  let component: FundraiserDashboardComponent;
  let fixture: ComponentFixture<FundraiserDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FundraiserDashboardComponent],
      imports: [
        LayoutModule,
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FundraiserDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});

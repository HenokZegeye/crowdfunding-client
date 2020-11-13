import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomSidebarComponent } from './sidebar.component';

describe('CustomSidebarComponent', () => {
  let component: CustomSidebarComponent;
  let fixture: ComponentFixture<CustomSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

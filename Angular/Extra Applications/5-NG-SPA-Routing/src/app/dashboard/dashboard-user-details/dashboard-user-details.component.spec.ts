import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardUserDetailsComponent } from './dashboard-user-details.component';

describe('DashboardUserDetailsComponent', () => {
  let component: DashboardUserDetailsComponent;
  let fixture: ComponentFixture<DashboardUserDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardUserDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardUserDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardUsersHomeComponent } from './dashboard-users-home.component';

describe('DashboardUsersHomeComponent', () => {
  let component: DashboardUsersHomeComponent;
  let fixture: ComponentFixture<DashboardUsersHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardUsersHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardUsersHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

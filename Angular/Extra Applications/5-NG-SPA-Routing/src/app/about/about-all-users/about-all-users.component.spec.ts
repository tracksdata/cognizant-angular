import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutAllUsersComponent } from './about-all-users.component';

describe('AboutAllUsersComponent', () => {
  let component: AboutAllUsersComponent;
  let fixture: ComponentFixture<AboutAllUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutAllUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutAllUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

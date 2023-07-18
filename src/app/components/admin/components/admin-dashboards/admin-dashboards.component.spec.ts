import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDashboardsComponent } from './admin-dashboards.component';

describe('AdminDashboardsComponent', () => {
  let component: AdminDashboardsComponent;
  let fixture: ComponentFixture<AdminDashboardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminDashboardsComponent]
    });
    fixture = TestBed.createComponent(AdminDashboardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RsvpManagementComponent } from './rsvp-management.component';

describe('RsvpManagementComponent', () => {
  let component: RsvpManagementComponent;
  let fixture: ComponentFixture<RsvpManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RsvpManagementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RsvpManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

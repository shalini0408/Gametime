import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { RsvpServiceService } from '../../services/rsvp-service/rsvp-service.service';


@Component({
  selector: 'app-event-card',
  imports: [CommonModule, MatCardModule, MatIconModule, RouterModule],
  templateUrl: './event-card.component.html',
  styleUrl: './event-card.component.css'
})
export class EventCardComponent {
  @Input() event: any;
  respondedAttendees: any[] = []; 
  constructor(private router: Router,
    private rsvpService : RsvpServiceService
  ) {}

  ngOnInit() {
    // Fetch the confirmed attendees for the event
    this.respondedAttendees = this.rsvpService.getConfirmedAttendees(this.event.id);
  }


  accessRsvp(eventId: string) {
    // Navigate to the RSVP page with the event ID as a parameter
    this.router.navigate(['/rsvp', eventId]);
  }
}

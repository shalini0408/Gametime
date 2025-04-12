import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RsvpServiceService {

  constructor() { }

  rsvp_events: { [eventId: number]: any[] } = {
    1: [
      { name: 'shalini', rsvp: 'Yes' },
      { name: 'mitanshu', rsvp: 'Yes' }
    ]
  };

  // Get all users for a specific event
  getAllUsers(eventId: number): any[] {
    return this.rsvp_events[eventId] || [];
  }

  // Get confirmed attendees for an event
  getConfirmedAttendees(eventId: number): any[] {
    return this.getAllUsers(eventId).filter(user => user.rsvp.toLowerCase() === 'yes');
  }

  // Add or update user RSVP
  addOrUpdateUser(eventId: number, newUser: any) {
    if (!this.rsvp_events[eventId]) {
      this.rsvp_events[eventId] = [];
    }

    const index = this.rsvp_events[eventId].findIndex(
      user => user.name.toLowerCase() === newUser.name.toLowerCase()
    );

    if (index !== -1) {
      this.rsvp_events[eventId][index] = newUser; // update existing
    } else {
      this.rsvp_events[eventId].push(newUser); // add new
    }
  }

  // Get RSVP counts (total, confirmed, declined)
  getResponseCounts(eventId: number) {
    const users = this.getAllUsers(eventId);
    const confirmed = users.filter(u => u.rsvp.toLowerCase() === 'yes').length;
    const declined = users.filter(u => u.rsvp.toLowerCase() === 'no').length;

    return {
      total: users.length,
      confirmed,
      declined
    };
  }
}

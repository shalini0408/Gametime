import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RsvpServiceService } from '../../services/rsvp-service/rsvp-service.service';
import { MatDialog } from '@angular/material/dialog';// Ensure correct import path
import { ParticipantComponent } from '../participant/participant.component';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { Player } from '../../models/player';
import { RsvpModel } from '../../models/rsvp-model';

@Component({
  selector: 'app-rsvp-management',
  imports: [CommonModule, FormsModule, MatIconModule, MatDialogModule],
  templateUrl: './rsvp-management.component.html',
  styleUrls: ['./rsvp-management.component.css']
})
export class RsvpManagementComponent implements OnInit {
  eventId!: number;
  playerName: string = '';
  playerRsvp: 'Yes' | 'No' | 'Maybe' = 'Yes';  // Set as a string with a predefined set of values
  confirmedAttendees: Player[] = [];
  responseCounts: RsvpModel = { total: 0, confirmed: 0, declined: 0 };

  constructor(
    private route: ActivatedRoute,
    private rsvpService: RsvpServiceService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.eventId = parseInt(id, 10);
        this.loadData();
      }
    });
  }

  // Submit RSVP form
  onSubmit(): void {
    if (this.isValidRsvp()) {
      const newUser: Player = { name: this.playerName, rsvp: this.playerRsvp };
      this.rsvpService.addOrUpdateUser(this.eventId, newUser);
      this.loadData();
    }
  }

  // Helper function to validate the form input
  private isValidRsvp(): boolean {
    return this.playerName.trim() !== '' && this.playerRsvp.trim() !== '';
  }

  // Load data for confirmed attendees and response counts
  private loadData(): void {
    this.confirmedAttendees = this.rsvpService.getConfirmedAttendees(this.eventId);
    this.responseCounts = this.rsvpService.getResponseCounts(this.eventId);
  }

  // Open a dialog to view all participants
  viewAllParticipants(): void {
    const allParticipants = this.rsvpService.getAllUsers(this.eventId);
    this.dialog.open(ParticipantComponent, {
      width: '400px',
      data: { participants: allParticipants }
    });
  }
}

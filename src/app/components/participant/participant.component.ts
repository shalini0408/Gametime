import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common'; //

@Component({
  selector: 'app-participant',
  imports: [CommonModule,MatDialogModule],
  templateUrl: './participant.component.html',
  styleUrl: './participant.component.css'
})
export class ParticipantComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: { participants: any[] }) {}
}

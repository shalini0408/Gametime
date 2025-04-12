import { Routes } from '@angular/router';
import { EventsComponent } from './components/events/events.component';
import { RsvpManagementComponent } from './components/rsvp-management/rsvp-management.component';


export const routes: Routes = [
    {path: '', component:EventsComponent},
    {path: 'rsvp/:id',component: RsvpManagementComponent}
];

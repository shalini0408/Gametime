🎉 RSVP Management Service

This project is an RSVP Management Web Application built with Angular and **Material UI**, allowing users to add, update, or remove participants for events based on their RSVP status. The application provides real-time tracking of participant responses, presenting clear insights into event attendance.

##Features

Event Listing – View a list of all upcoming events.
*Event Cards – Each event is displayed as a styled card with key details.
RSVP Form – Add or update participant RSVP using a simple form (player's name is unique).
Participation Metrics – Displays total participants, confirmed attendees, and declined responses.
Participants View – A complete list of all participant names and their RSVP statuses.
In-Memory Data Store – RSVP data is temporarily stored using a JSON structure in the service file.

## Tech Stack

- Framework: Angular
- UI Library: Angular Material
- Language: TypeScript
- Styling: CSS
- Data Handling: Service with a mock JSON structure

## File Structure

```plaintext
src/
├── components/
│   ├── event/                 # Lists all events
│   ├── event-card/            # Displays individual event info (child of event)
│   ├── rsvp-management/       # Contains form for RSVP and shows response summary
│   └── participant/           # Displays list of all participants and their RSVP status
│
├── services/
│   └── rsvp-service/          # Contains RSVP service with mock JSON data store
│
└── models/
    ├── player.ts              # Defines Player model (name, rsvp)
    └── rsvp-model.ts          # Defines RSVP summary model (total, confirmed, declined)
```


## Components Overview

🔹 Event Component
Displays a list of all available events. Acts as a parent component for rendering individual `EventCard` components.

🔹 EventCard Component
Shows summarized information for each event, including title, time, and other visual elements. It uses Material Card design and animations.

🔹 RsvpManagement Component
Contains the RSVP form where users can enter a participant's name and select a response (`Yes`, `No`, or `Maybe`). Also shows the summary count of all responses (confirmed, declined, total).

### 🔹 Participant Component
Opens as a dialog/modal window and lists all participants who have responded, along with their RSVP choice.

## 📸 Screenshots *(Optional)*

_Add UI screenshots here to showcase the application._

---

## 🧑‍💻 Setup Instructions

1. Clone the repo:
   ```bash
   git clone https://github.com/yourusername/rsvp-management-app.git
   ```

2. Navigate to the project directory:
   ```bash
   cd rsvp-management-app
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Run the development server:
   ```bash
   ng serve
   ```

5. Visit `http://localhost:4200` in your browser.

---

## 📄 License

This project is licensed under the MIT License.

---

Let me know if you'd like this turned into an actual `README.md` file or need help adding screenshots or a demo link.

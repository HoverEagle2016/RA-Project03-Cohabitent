import { Routes } from '@angular/router';

import { JournalEntryComponent }    from './journal-entry/journal-entry.component';
import { JournalNewComponent } from './journal-new/journal-new.component';

// Route Configuration
export const journalRoutes: Routes = [
  { path: 'journal-entry/:id', component: JournalEntryComponent }, 
  { path: 'journals-new', component: JournalNewComponent},
];
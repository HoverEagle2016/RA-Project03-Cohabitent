import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { JournalService } from '../journal-service.service';
 
import { JournalEntry } from '../journal-entry';
import { Observable } from 'rxjs/Observable';


@Component({
	moduleId: module.id,
  selector: 'cohab-journal-entry',
  templateUrl: './journal-entry.component.html',
  styleUrls: ['journal-entry.component.css']
})
export class JournalEntryComponent implements OnInit {
	sub: any;
  journal: Observable<JournalEntry>;

  constructor(private journalService: JournalService, private route: ActivatedRoute) { }

  ngOnInit() {
  	// Subscribe to route params
      this.sub = this.route.params.subscribe(params => {
        let id = params['id'];
       // Retrieve Pet with Id route param
      this.journal = this.journalService.journal;
      this.journalService.getJournalById(id);
        
    });
  }

}

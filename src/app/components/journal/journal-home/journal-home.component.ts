import { Component, OnInit } from '@angular/core';

import {JournalService} from '../journal-service.service';

import {JournalEntry} from '../journal-entry';


@Component({
  selector: 'cohab-journal-home',
  templateUrl: './journal-home.component.html',
  styleUrls: ['./journal-home.component.css']
})
export class JournalHomeComponent implements OnInit {

	public journals: JournalEntry[] = [];
  public entry: JournalEntry;
  public params: string;

  constructor(private journalService: JournalService) { 	
  }

  ngOnInit() {
  	this.getJournals();

  }

  getJournals() {
     this.journalService.getJournals().then(journals => {
     	this.journals = journals;
     	console.log("COMPONENT:");
     	console.log(this.journals);
     })
   }
}

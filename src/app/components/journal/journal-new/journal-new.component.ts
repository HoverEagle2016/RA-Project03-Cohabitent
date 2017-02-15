import { Component, OnInit } from '@angular/core';

import {JournalService} from '../journal-service.service';

import {JournalEntry} from '../journal-entry';

@Component({
  selector: 'cohab-journal-new',
  templateUrl: './journal-new.component.html',
  styleUrls: ['./journal-new.component.css']
})
export class JournalNewComponent implements OnInit {

  constructor(private journalService: JournalService) { }

  ngOnInit() {
  }

  createEntry() {

  	
  	
  }
 
}

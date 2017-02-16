import { Component, OnInit } from '@angular/core';

import {JournalService} from '../journal-service.service';

import {JournalEntry} from '../journal-entry';

@Component({
  selector: 'cohab-journal-new',
  templateUrl: './journal-new.component.html',
  styleUrls: ['./journal-new.component.css']
})
export class JournalNewComponent implements OnInit {
  public journals: JournalEntry[];
  public entry: JournalEntry;
  public params: string;
  
  constructor(private journalService: JournalService) { }
   
  ngOnInit() {
    this.entry = new JournalEntry();
    this.getJournals();

  }

  submitEntry(){
    this.params = JSON.stringify(this.entry);
    // console.log(JSON.stringify($("#apiForm").serializeArray()));
    this.journalService.postEntry(encodeURI(this.params));  
  }
   
   pushEntry(entry: JournalEntry){
     this.journals.push(entry);
   }
 
   getJournals() {
     this.journalService.getJournals().then(journals => this.journals = journals);
     console.log(this.journals);
   }
}












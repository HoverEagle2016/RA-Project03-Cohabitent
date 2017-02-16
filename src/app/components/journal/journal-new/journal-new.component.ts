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
    

  }

  submitEntry(){
    this.params = "[" + JSON.stringify(this.entry) + "]";
    // console.log(this.params);
    let paramters = JSON.stringify($("#apiForm").serializeArray());
    console.log(paramters);
    // this.journalService.postEntry(encodeURI(paramters));  
    this.journalService.postEntry(paramters); 
  }
   
   // pushEntry(entry: JournalEntry){
   //   this.journals.push(entry);
   // }
 
}












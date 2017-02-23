import { Component, OnInit } from '@angular/core';

import {JournalService} from '../journal-service.service';

import {JournalEntry} from '../journal-entry';

@Component({
  moduleId: module.id,
  selector: 'cohab-journal-new',
  templateUrl: './journal-new.component.html',
  styleUrls: ['./journal-new.component.scss']
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

  reset() {
    this.entry.title="";
    this.entry.image="";
    this.entry.content="";
  }
   
   // pushEntry(entry: JournalEntry){
   //   this.journals.push(entry);
   // }
 
}












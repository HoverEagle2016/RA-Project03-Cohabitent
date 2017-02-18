import { Component, OnInit, NgZone } from '@angular/core';
import { OwlCarouselComponent } from './owlCarousel.component';

import {JournalService} from '../journal-service.service';

import {JournalEntry} from '../journal-entry';

import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'cohab-journal-home',
  templateUrl: './journal-home.component.html', 
  styleUrls: [ 'journal-home.component.css' ]
})
export class JournalHomeComponent implements OnInit {

  public journals_mock = [
    {
    
    "title":"nike test post",
    "content":"some test post",
    "categories":["awesome","kitty","Uncategorized"],
    "image":"http:\/\/portal.helloitscody.com\/inhabitent\/wp-content\/uploads\/2017\/02\/Nike-Logo-Free-PNG-Image-13.png",
    "date":"February 15, 2017",
    "author":""
    },
    {
    "ID":6,
    "title":"nike test post",
    "content":"some test post",
    "categories":["awesome","kitty","Uncategorized"],
    "image":"http:\/\/portal.helloitscody.com\/inhabitent\/wp-content\/uploads\/2017\/02\/Nike-Logo-Free-PNG-Image-12.png",
    "date":"February 14, 2017",
    "author":""
    },
    {
    "ID":1,
    "title":"Hello world!",
    "content":"Welcome to WordPress. This is your first post. Edit or delete it, then start writing!",
    "categories":["Uncategorized"],
    "image":"http:\/\/portal.helloitscody.com\/inhabitent\/wp-content\/uploads\/2017\/02\/Nike-Logo-Free-PNG-Image-12.png",
    "date":"February 14, 2017",
    "author":"camp_admin"
    },
    {
    "ID":1,
    "title":"Hello world!",
    "content":"Welcome to WordPress. This is your first post. Edit or delete it, then start writing!",
    "categories":["Uncategorized"],
    "image":"http:\/\/portal.helloitscody.com\/inhabitent\/wp-content\/uploads\/2017\/02\/Nike-Logo-Free-PNG-Image-12.png",
    "date":"February 14, 2017",
    "author":"camp_admin"
    }
  ]


	public journals: JournalEntry[] = [];
  public entry: JournalEntry;
  public params: string;

  constructor(private journalService: JournalService) { 	
    this.getJournals();
  }

  ngOnInit() { 	
  }

  getJournals() {

    this.journalService.getJournals().then(journals => {
       this.journals = journals;
       
     })
     


    
 }

 














}

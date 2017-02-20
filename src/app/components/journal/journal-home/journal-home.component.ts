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


  journals: Observable<JournalEntry[]>;
  public entry: JournalEntry;
  public params: string;

  constructor(private journalService: JournalService) { }

  ngOnInit() {
    this.journals = this.journalService.journals;
    this.journalService.getJournals();
  }
    
}




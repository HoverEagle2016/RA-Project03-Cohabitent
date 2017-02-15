import { Injectable, Input } from '@angular/core';

import {JournalEntry} from './journal-entry';

@Injectable()
export class JournalService {
	
	@Input() entry: JournalEntry;
	entries: JournalEntry[];

	private journalURL = "http://portal.helloitscody.com/inhabitent/api";
	private GET = "/get";
	private POST = "/post";
	private token = "94a08da1fecbb6e8b46990538c7b50b2";

  constructor() { }

  getJournals(){

  }

  postJournal(){

  }
}

import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';

import {JournalEntry} from './journal-entry';

import 'rxjs/add/operator/toPromise';	

@Injectable()
export class JournalService {
	
	private headers = new Headers({'Content-Type': 'application/json'});
	entries: JournalEntry[];
	postURL: string;
	getURL: string = "http://portal.helloitscody.com/inhabitent/api/get/94a08da1fecbb6e8b46990538c7b50b2/?params=%5B%7B%22name%22:%22posts_per_page%22,%22value%22:%225%22%7D,%7B%22name%22:%22paged%22,%22value%22:%221%22%7D%5D";

	private journalURL = "http://portal.helloitscody.com/inhabitent/api";
	private GET = "/get";
	private POST = "/post";
	private token = "94a08da1fecbb6e8b46990538c7b50b2";

  constructor(private http: Http) { }
  
  postEntry(params: string){
  	this.postURL = this.journalURL + this.POST + this.token + "?params=" + params;
  	
  }


  getJournals(): Promise <JournalEntry[]>{
  	// this.getURL = this.journalURL + this.GET + this.token + "?params=";
  	return this.http.get(this.getURL)
               .toPromise()
               .then(response => response.json() as JournalEntry[])
               .catch(this.handleError);

  }

   private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
 
}









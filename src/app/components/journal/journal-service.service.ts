import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';

import {JournalEntry} from './journal-entry';

import 'rxjs/add/operator/toPromise';	

@Injectable()
export class JournalService {
	
  private journalURL = "http://portal.helloitscody.com/inhabitent/api";
  private GET = "/get";
  private POST = "/post";
  private token = "/94a08da1fecbb6e8b46990538c7b50b2";


	headers = new Headers({'Content-Type': 'application/json'});

	entries: JournalEntry[] = <JournalEntry[]>[];
	postURL: string;
	fixed_getURL: string = "http://portal.helloitscody.com/inhabitent/api/get/94a08da1fecbb6e8b46990538c7b50b2/?params=%5B%7B%22name%22:%22posts_per_page%22,%22value%22:%225%22%7D,%7B%22name%22:%22paged%22,%22value%22:%221%22%7D%5D";

  constructor(private http: Http) { }
  
  getJournals(): Promise <JournalEntry[]>{
  	// this.getURL = this.journalURL + this.GET + this.token + "?params=";
  	return this.http.get(this.fixed_getURL)
               .toPromise()
               .then(response => {
                 this.entries = response.json() as JournalEntry[];
                 console.log("SERVICE:");
                 console.log(this.entries);

                 return this.entries;
               })
               .catch(this.handleError);
  }

   private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  postEntry(params: string): Promise <JournalEntry>{
    this.postURL = this.journalURL + this.POST + this.token + "?params=" + params;
    console.log(this.postURL);
    // this.headers.append('Access-Control-Allow-Headers','Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With');
    
    return this.http
            .post(this.postURL, params, {headers:this.headers})
            .toPromise()
            .then(res => res.json().data)
            .catch(this.handleError);  
  }
 
}




import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import {JournalEntry} from './journal-entry';

import 'rxjs/add/operator/toPromise';	
import 'rxjs/add/operator/map';

@Injectable()
export class JournalService {

  journal: Observable<JournalEntry>;
  journals: Observable<JournalEntry[]>;
  private _journals: BehaviorSubject<JournalEntry[]>;
  private _journal: BehaviorSubject<JournalEntry>;

  private baseUrl: string;
  private dataStore: {
    journals: JournalEntry[];
    journal: JournalEntry;
	}
  

  private journalURL = "http://portal.helloitscody.com/inhabitent/api";
  private GET = "/get";
  private POST = "/post";
  private token = "/94a08da1fecbb6e8b46990538c7b50b2";


	headers = new Headers({'Content-Type': 'application/json'});

	entries: JournalEntry[] = <JournalEntry[]>[];
	postURL: string;
	fixed_getURL: string = "http://portal.helloitscody.com/inhabitent/api/get/94a08da1fecbb6e8b46990538c7b50b2/?params=%5B%7B%22name%22:%22posts_per_page%22,%22value%22:%225%22%7D,%7B%22name%22:%22paged%22,%22value%22:%221%22%7D%5D";

  constructor(private http: Http) { 
    this.baseUrl = "http://portal.helloitscody.com/inhabitent/api/get/94a08da1fecbb6e8b46990538c7b50b2/?params=%5B%7B%22name%22:%22posts_per_page%22,%22value%22:%225%22%7D,%7B%22name%22:%22paged%22,%22value%22:%221%22%7D%5D";
    this.dataStore = {
      journals: [],
      journal: new JournalEntry
    }
    this._journals = <BehaviorSubject<JournalEntry[]>> new BehaviorSubject([]);
    this.journals = this._journals.asObservable();

    this._journal = <BehaviorSubject<JournalEntry>> new BehaviorSubject<JournalEntry>(new JournalEntry);
    this.journal = this._journal.asObservable();
  }
  
  // getJournals(): Promise <JournalEntry[]>{
  // 	// this.getURL = this.journalURL + this.GET + this.token + "?params=";
  // 	return this.http.get(this.fixed_getURL)
  //              .toPromise()
  //              .then(response => {
  //                let entries = response.json();
  //                console.log(Object.keys(entries));

  //                return this.entries;
  //              })
  //              .catch(this.handleError);
  // }

   owlCarousel () {
          
         $(document).ready(function(){
            $('.owl-carousel').owlCarousel({
              loop:true,
              margin:10,
              responsiveClass:true,
              responsive:{
                  0:{
                      items:1,
                      nav:true
                  },
                  600:{
                      items:2,
                      nav:false
                  },
                  1050:{
                      items:3,
                      nav:true,
                      loop:false
                    }
                }
            })

        });

    }

  getJournals() {
    this.http.get(this.baseUrl).map(response => {
      return response.json();
    })
    .subscribe(data => {
      let journalArray = [];
      for (let key in data) {
           if (key != 'count') {
          journalArray.push(data[key]);
        }       
      }
      this.dataStore.journals = journalArray;
      this.owlCarousel();
      this._journals.next(Object.assign({}, this.dataStore).journals); 
    }, error => console.log('Could not load journals.'));

  }

  getJournalById(id: string) {
    this.http.get(this.baseUrl).map(response => {
      return response.json();
    })
    .subscribe(data => {    
      for (let key in data) {
           if (data[key]["ID"] == id) {
          this.dataStore.journal = data[key];
        }       
      }
      this._journal.next(Object.assign({}, this.dataStore).journal);   
    }, error => console.log('Could not load journal.'));
  } 

   private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  postEntry(params: string): Promise <JournalEntry>{
    this.postURL = this.journalURL + this.POST + this.token + "?params=" + params;
    // console.log(this.postURL);
    // this.headers.append('Access-Control-Allow-Headers','Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With');
    
    return this.http
            .post(this.postURL, params, {headers:this.headers})
            .toPromise()
            .then(res => res.json().data)
            .catch(this.handleError);  
  }
 
}




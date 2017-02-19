import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	
  selector: 'cohab-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  btnOnClick(){
  	console.log('test');
  	this.router.navigate['/journals/new'];
  }

}

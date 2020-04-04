import { Component, OnInit } from '@angular/core';
// import { cribs } from './data/cribsData';
import { HttpClient } from '@angular/common/http';
import { from } from 'rxjs';

@Component({
  selector: 'app-crib-listing',
  templateUrl: './crib-listing.component.html',
  styleUrls: ['./crib-listing.component.css']
})
export class CribListingComponent implements OnInit {


  cribs: Array<any>;
  error: string;
  // cribs: Array<any> = cribs;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // make an http request

    this.http.get('assets/cribsData.json').subscribe(data => {
      console.log(data);
      this.cribs = JSON.parse(JSON.stringify(data));
      error => this.error = error.statusText;
     // console.log('this:/n' + this.cribs);
  });

  }

}

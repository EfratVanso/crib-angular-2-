import { Component, OnInit } from '@angular/core';
// import { cribs } from './data/cribsData';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CribsService } from './../services/cribs.service';
import { UtilService } from './../services/util.service';
import { Crib } from '../crib';


@Component({
  selector: 'app-crib-listing',
  templateUrl: './crib-listing.component.html',
  styleUrls: ['./crib-listing.component.css']
})
export class CribListingComponent implements OnInit {


  cribs: Array<Crib>;
  error: string;
  sortDirection = 'asc';
  sortField = 'price';
  sortFields: Array<string> = [
    'address',
    'price',
    'area',
    'bathrooms',
    'bedrooms',
    'type'
  ];
  // cribs: Array<any> = cribs;
  constructor(private http: HttpClient,
              private cribsService: CribsService,
              public utilService: UtilService) { }

  ngOnInit(): void {
   // make an http request from the service
    this.cribsService.getAllCribs().subscribe({
      //data => {

      // console.log(data);
      // this.cribs = data;
      // error => this.error = error.statusText;
      next: data => {this.cribs = data;
                     console.log('Http req for all cribs:\n' + JSON.stringify(data));
      },
      error: err => this.error = err
    });

    // when adding new item, this function is being called
    this.cribsService.newCribSubject.subscribe(
      // data => console.log(data));
      data => this.cribs = [data, ...this.cribs ]// push the new data to the start of the array
    );
  }
}

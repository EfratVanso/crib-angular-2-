import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from } from 'rxjs';
// import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class CribsService {

  constructor(private http: HttpClient) { }

  getAllCribs(){
    return this.http.get('assets/cribsData.json');
    // .subscribe(data => {
    //   JSON.parse(JSON.stringify(data));
    // });
  }

}

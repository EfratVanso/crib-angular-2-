import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from } from 'rxjs';
import { Subject } from 'rxjs';
// import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class CribsService {

  public newCribSubject = new Subject<any>();
  constructor(private http: HttpClient) { }

  getAllCribs(){
    return this.http.get('assets/cribsData.json');
  }
  addCrib(data){
    data.image = 'default-crib';
    this.newCribSubject.next(data);
  }
}

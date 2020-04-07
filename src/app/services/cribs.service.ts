import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { from } from 'rxjs';
import { Subject } from 'rxjs';
import { Crib } from '../crib';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CribsService {

  public newCribSubject = new Subject<any>();
  constructor(private http: HttpClient) { }

  getAllCribs(): Observable<Crib[]>{
    return this.http.get<Crib[]>('assets/cribsData.json').pipe(
      tap(data => console.log('All ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
}
private handleError(err: HttpErrorResponse){
  console.log(err.status + '/n' + err.message);
  return throwError(err.status + '/n' + err.message);
}
  addCrib(data){
    data.image = 'default-crib';
    this.newCribSubject.next(data);
  }
}

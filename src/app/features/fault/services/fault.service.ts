import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Fault } from '../models/fault';
// import { MessageService } from './message.service';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class FaultService {
  private BASE_URL: string = 'http://localhost:5100/api/FaultItems';
  constructor(
    private http: HttpClient // private messageService: MessageService
  ) {}

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  getFaults(): Observable<Fault[]> {
    return this.http
      .get<Fault[]>(this.BASE_URL)
      .pipe(catchError(this.handleError<Fault[]>('getFaults', [])));
  }

  getFault(id: number): Observable<Fault> {
    return this.http.get<Fault>(`${this.BASE_URL}/${id}`).pipe(
      tap((_) => console.log(`fetched fault id=${id}`)),
      catchError(this.handleError<Fault>(`getFault id=${id}`))
    );
  }

  addFault(fault: Fault): Observable<Fault> {
    return this.http.post<Fault>(this.BASE_URL, fault, this.httpOptions).pipe(
      tap((newFault: Fault) => console.log(`added fault w/ id=${newFault.id}`)),
      catchError(this.handleError<Fault>('addFault'))
    );
  }

  // updateFault(fault: Fault): Observable<any> {
  updateFault(fault: Fault) {
    return this.http
      .put<any>(`${this.BASE_URL}/${fault.id}`, fault, this.httpOptions)
      .pipe(
        tap((_) => console.log(`updated fault id=${fault.id}`)),
        catchError(this.handleError<any>('updateFault'))
      )
      .subscribe((data) => {
        console.log(data);
      });
  }

  deleteFault(id: number): Observable<Fault> {
    return this.http
      .delete<Fault>(`${this.BASE_URL}/${id}`, this.httpOptions)
      .pipe(
        tap((_) => console.log(`deleted fault id=${id}`)),
        catchError(this.handleError<Fault>('deleteFault'))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}

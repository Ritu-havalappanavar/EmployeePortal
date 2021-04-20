import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  saveUserRegistrationURL = '';
  getRegistrationDetailsURL = '';
  httpOptions: any;
  subject = new BehaviorSubject<any>([]);
  currentArray: Observable<any> =  this.subject.asObservable();
  
  constructor(private http: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
  }

// code for savings data to backend via api
  submitUserDetails(userData) {
    return this.http.post(this.saveUserRegistrationURL,userData, this.httpOptions);
  }

// code for getting data from backend
  getUserDetails() {
    return this.http.get(this.getRegistrationDetailsURL, this.httpOptions);
  }

  storeRegistrationDetails(item) {
    this.currentArray.pipe(take(1)).subscribe(val => {
      console.log(val)
      const newArr = [...val, item];
      this.subject.next(newArr);
    })
  }
}

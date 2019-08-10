import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { HttpParams, HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = 'https://debojyotiroy13.pythonanywhere.com/';

  constructor(public db: AngularFirestore, private http: HttpClient) {}

  post(path:String, body:any){
     return this.http.post(this.baseUrl  + path, body,
        {headers: new HttpHeaders().set('Content-Type', 'application/json')});
  }
  get(path:String){
     return this.http.get(this.baseUrl  + path,
        {headers: new HttpHeaders().set('Content-Type', 'application/json')});
  }
  delete(path:String, id : String){
     return this.http.delete(this.baseUrl  + path + '/' + id,
        {headers: new HttpHeaders().set('Content-Type', 'application/json')});
  }
}

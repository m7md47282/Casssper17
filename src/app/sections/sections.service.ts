import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { IGetRequest } from '../api-interfaces';

@Injectable({
  providedIn: 'root'
})

export class SectionsService {

  apiUrl = "http://localhost:3200/api"

  constructor(private http: HttpClient) { }

  saveSection(payload: any) {

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    console.log('this is the paylaod form the service',payload);
    

    return this.http.post<{ success: boolean, message: string, _id: string }>(
      this.apiUrl + '/section',
      payload,
      { headers }
    )
  }

  getSections(payload: any){
    return this.http.get<IGetRequest> ( 
      this.apiUrl + '/sections',
      payload ,
      )
  }

  deleteSection(payload: {id: string}){
      const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.delete(
      `${this.apiUrl}/sections/${payload.id}`,
      { headers }
    )
  }
}

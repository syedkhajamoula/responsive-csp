import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {
  InsertedSuccess,
  Read,
  StudentDetails,
  UniqueConstraintError,
} from './save';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class SevenService {
  constructor(private http: HttpClient) {}
  headers = new HttpHeaders({
    'content-type': 'application/json',
    Authentication: 'Bearer' + localStorage.getItem('token'),
  });


  FoodHeaders = new HttpHeaders({
    'X-RapidAPI-Key': '9d95c08d75mshae57f7f480c131ap1443f3jsn5525ed1bd303',
    'X-RapidAPI-Host': 'pizza-and-desserts.p.rapidapi.com',
  });


  
  private url = 'http://localhost:3000/';

  Insert(
    Details: StudentDetails
  ): Observable<InsertedSuccess | UniqueConstraintError> {
    return this.http.post<InsertedSuccess | UniqueConstraintError>(
      this.url + 'vip/Insert',
      Details,
      { headers: this.headers }
    );
  }
  Read(name: String): Observable<Read> {
    return this.http.get<Read>(`${this.url}vip/Read${name}`);
  }
  ulogin(name: String): Observable<Read> {
    return this.http.get<Read>(`${this.url}vip/ulogin${name}`);
  }
  Delete(name: String): Observable<InsertedSuccess> {
    console.log(`${this.url}vip/Delete${name}`);
    return this.http.delete<InsertedSuccess>(
      `${this.url}vip/Delete${name}`
    );
  }
  Update(name: String, Details: StudentDetails) {
    return this.http.put(`${this.url}vip/Update${name}`, Details, {
      headers: this.headers,
    });
  }
  
}


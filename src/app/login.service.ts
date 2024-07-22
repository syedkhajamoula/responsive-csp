import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {
  InsertedSuccess,
  Read,
  StudentDetails,
  UniqueConstraintError,
} from './group';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class LoginService {
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
      this.url + 'Rental/Insert',
      Details,
      { headers: this.headers }
    );
  }
  Read(City: String): Observable<Read> {
    return this.http.get<Read>(`${this.url}Rental/Read${City}`);
  }
  ulogin(City: String): Observable<Read> {
    return this.http.get<Read>(`${this.url}Rental/Read${City}`);
  }
  Delete(Name: String): Observable<InsertedSuccess> {
    console.log(`${this.url}Rental/Delete${Name}`);
    return this.http.delete<InsertedSuccess>(
      `${this.url}Rental/Delete${Name}`
    );
  }
  Update(City: String, Details: StudentDetails) {
    return this.http.put(`${this.url}Rental/Update${City}`, Details, {
      headers: this.headers,
    });
  }

}
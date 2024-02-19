import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private http: HttpClient) { }

  private apiUrl = 'http://localhost:3000';

  getData() {
    return this.http.get(`${this.apiUrl}/data`);
  }

  postData(data: any) {
    return this.http.post(`${this.apiUrl}`, data);
  }

  deleteData(id: number) {
    return this.http.delete<any>(`${this.apiUrl}/data/${id}`);
  }

}

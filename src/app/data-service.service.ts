import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {firstValueFrom, Observable} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {
  }

  // Example: Send data to a backend endpoint
  sendData(data: { id: number, name: string, age: number }) {
    return firstValueFrom(this.http.post('/api/hello/users', data));
  }

  fetchData() {
    return firstValueFrom(this.http.get<FetchDataResponse[]>("/api/hello/users"));
  }

  deleteUser(id: number): Promise<void> {
    return firstValueFrom(this.http.delete<void>(`/api/hello/users/${id}`));
  }

  changeData(data: { id: number, name: string, age: number }) {
    return firstValueFrom(this.http.put('/api/hello/users', data));
  }
}


export interface FetchDataResponse {
  message: string;
  age: number;
  id: number;
}

import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {firstValueFrom} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {
  }

  // Example: Send data to a backend endpoint
  sendData(data: { name: string, age: number }) {
    return firstValueFrom(this.http.post<{ message: string | undefined | null }>('/api/hello', data));
  }

  fetchData() {
    return firstValueFrom(this.http.get<FetchDataResponse>("/api/hello"));
  }
}

export interface FetchDataResponse {
  message: string;
  age: number;
}

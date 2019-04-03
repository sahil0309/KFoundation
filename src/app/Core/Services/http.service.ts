import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Injectable(
)
export class HttpService {

 private baseUrl = 'http://localhost:3000/api'; // Server dev

  constructor(private http: HttpClient) { }

  get(url: string) {
    let urlValue = this.baseUrl + url
    return this.http.get(urlValue);
  }

  post(url: string,data: any) {
    let urlValue = this.baseUrl + url;
    return this.http.post(urlValue, data);
  }

  put(url: string, data: any) {
    let urlValue = this.baseUrl + url;
    return this.http.put(urlValue, data);
  }

  delete(url: string) {
    let urlValue =  this.baseUrl + url;
    return this.http.delete(urlValue);
  }
}

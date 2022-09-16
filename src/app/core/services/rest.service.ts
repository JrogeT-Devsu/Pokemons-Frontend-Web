import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'any'
})
export class RestService {

  private baseUrl = environment.webServicesUrl;

  constructor(
    private httpClient: HttpClient,
  ) { }

  public get<T>(path: string): Observable<T> {
    return this.httpClient.get<T>(this.baseUrl + path);
  }

  public post<T>(path: string, body: any): Observable<T> {
    return this.httpClient.post<T>(this.baseUrl + path, body);
  }

  public put<T>(path: string, body: any): Observable<T> {
    return this.httpClient.put<T>(this.baseUrl + path, body);
  }

  public delete<T>(path: string): Observable<T> {
    return this.httpClient.delete<T>(this.baseUrl + path);
  }

}

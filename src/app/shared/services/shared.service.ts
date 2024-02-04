import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';
import { IpResponse } from '../classes/ip-response.model';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private http: HttpClient) {}

  checkIpAddress(): Observable<IpResponse> {
    return this.http.get<IpResponse>(env.myIP);
  }

}

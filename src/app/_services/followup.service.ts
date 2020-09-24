import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { followUpData } from '../_models/followup.model';

@Injectable({
  providedIn: 'root'
})
export class FollowupService {


  constructor(private http: HttpClient) { }
  getFollowupdetails() {
    return this.http.get<any>('assets/json/followupData.json')
      .toPromise()
      .then(res => <followUpData[]>res.data)
      .then(data => { return data; });
  }
}

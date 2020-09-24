import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ongoingIncidents } from '../_models/ongoingIncidents.model';

@Injectable({
  providedIn: 'root'
})
export class OngoingincidentsService {

  constructor(private http: HttpClient) { }

  onGoingIncidents() {
    return this.http.get<any>('assets/json/ongoingIncidents.json')
      .toPromise()
      .then(res => <ongoingIncidents[]>res.data)
      .then(data => { return data; });
  }
}

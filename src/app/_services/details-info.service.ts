import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { hospitlDetails, bloodBankDetails, policeStationDetails } from '../_models/details.model';

@Injectable({
  providedIn: 'root'
})
export class DetailsInfoService {

  constructor(private http: HttpClient) { }
  // Hospita details
  getHospitalDetails() {
    return this.http.get<any>('assets/json/hospitalList.json')
      .toPromise()
      .then(res => <hospitlDetails[]>res.data)
      .then(data => { return data; });
  }
  // Blood Bank details
  getBloodBankDetails() {
    return this.http.get<any>('assets/json/bloodbanks.json')
      .toPromise()
      .then(res => <bloodBankDetails[]>res.data)
      .then(data => { return data; });
  }
  // Hospita details
  getPoliceStationDetails() {
    return this.http.get<any>('assets/json/policestation.json')
      .toPromise()
      .then(res => <policeStationDetails[]>res.data)
      .then(data => { return data; });
  }
}


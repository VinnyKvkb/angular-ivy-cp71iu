import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { patientInfo } from '../_models/patientInformation.model';

@Injectable({
  providedIn: 'root'
})
export class PatientinformationService {

  constructor(private http: HttpClient) { }
  getPatientDetails() {
    return this.http.get<any>('assets/json/patiendetails.json')
      .toPromise()
      .then(res => <patientInfo[]>res.data)
      .then(data => { return data; });
  }
}

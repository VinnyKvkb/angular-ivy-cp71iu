import { Component, OnInit } from '@angular/core';
import { SortEvent } from '../../_tableconstants/api';
import { patientInfo } from '../../_models/patientInformation.model';
import { PatientinformationService } from '../../_services/patientinformation.service';
import { MatDialog } from '@angular/material';
import { AddpatientComponent } from '../addpatient/addpatient.component';
import { AssessmentComponent } from '../assessment/assessment.component';


@Component({
  selector: 'app-patientsinformation',
  templateUrl: './patientsinformation.component.html',
  styleUrls: ['./patientsinformation.component.css']
})
export class PatientsinformationComponent implements OnInit {

  // ModalBox for Add patient
  addPatient() {
    this.dialog.open(AddpatientComponent, {
      width: '60%'
    });
  }
  // ModalBox for Assessment
  assesmentDetails() {
    this.dialog.open(AssessmentComponent, {
      width: '60%'
    });
  }

  patientsInfoList: patientInfo[];
  cols: any[];

  constructor(private patientInfoService: PatientinformationService, public dialog: MatDialog) { }

  ngOnInit() {
    this.patientInfoService.getPatientDetails().then(patient => this.patientsInfoList = patient);
    this.cols = [
      { field: "patientId", header: "Patient ID" },
      { field: "patientName", header: "Patient Name" },
      { field: "age", header: "Age" },
      { field: "gender", header: "Gender" },
      // { field: "ambulanceNumber", header: "Ambulance #" },
      // { field: "firstResponder", header: "First Responder #" },
      { field: "medicalChiefComplaint", header: "Medical Chief Complaint" },
      { field: "policeChiefComplaint", header: "Police Chief Complaint" },
      { field: "fireChiefComplaint", header: "Fire Chief Complaint" },
    ]
  }
  // For Table Sorting
  customSort(event: SortEvent) {
    event.data.sort((data1, data2) => {
      let value1 = data1[event.field];
      let value2 = data2[event.field];
      let result = null;

      if (value1 == null && value2 != null)
        result = -1;
      else if (value1 != null && value2 == null)
        result = 1;
      else if (value1 == null && value2 == null)
        result = 0;
      else if (typeof value1 === 'string' && typeof value2 === 'string')
        result = value1.localeCompare(value2);
      else
        result = (value1 < value2) ? -1 : (value1 > value2) ? 1 : 0;

      return (event.order * result);
    });
  }
}
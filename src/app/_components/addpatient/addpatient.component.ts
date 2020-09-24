import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addpatient',
  templateUrl: './addpatient.component.html',
  styleUrls: ['./addpatient.component.css']
})
export class AddpatientComponent implements OnInit {
  // DOB
  dob: Date;
  // Gender
  genders: Gender[];
  selectedGender: Gender;
  // Medical
  medicalOptions: Medical[];
  selectedMedicalOption: Medical;
  // Police
  policeOptions: Police[];
  selectedPoliceOption: Police;
  // fire
  fireOptions: Fire[];
  selectedFireOption: Fire;

  constructor() { }

  ngOnInit() {
    // 1) Gender
    this.genders = [
      { genderType: 'Select Gender', genderId: null },
      { genderType: 'Male', genderId: 1 },
      { genderType: 'Female', genderId: 2 },
      { genderType: 'Others', genderId: 3 }
    ];
    // 1) Medical
    this.medicalOptions = [
      { medicalType: 'Select Medical Complaint', medicalId: null },
      { medicalType: 'Medical-1', medicalId: 1 },
      { medicalType: 'Medical-2', medicalId: 2 },
      { medicalType: 'Medical-3', medicalId: 3 }
    ];
    // 1) Police
    this.policeOptions = [
      { policeType: 'Select Police Complaint', policeId: null },
      { policeType: 'Police-1', policeId: 1 },
      { policeType: 'Police-2', policeId: 2 },
      { policeType: 'Police-3', policeId: 3 }
    ];
    // 1) Fire
    this.fireOptions = [
      { fireType: 'Select Fire Complaint', fireId: null },
      { fireType: 'Fire-1', fireId: 1 },
      { fireType: 'Fire-2', fireId: 2 },
      { fireType: 'Fire-3', fireId: 3 }
    ];
  }

}
// Interface for gender
export interface Gender {
  genderType: string;
  genderId: number;
}
// Interface for Medical
export interface Medical {
  medicalType: string;
  medicalId: number;
}
// Interface for Police
export interface Police {
  policeType: string;
  policeId: number;
}
// Interface for Fire
export interface Fire {
  fireType: string;
  fireId: number;
}
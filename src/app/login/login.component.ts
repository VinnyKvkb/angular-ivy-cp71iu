import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // Particls JS For Background
  myStyle: object = {};
  myParams: object = {};
  width: number = 100;
  height: number = 100;

  // Shifts Dropdown
  shifts: Shift[];
  selectedShift: Shift;

  constructor() {
    this.shifts = [
      { shiftType: 'Select Shift', shiftId: null },
      { shiftType: 'Morning Shift', shiftId: 1 },
      { shiftType: 'Night Shift', shiftId: 1 }
    ]
  }

  ngOnInit() {

    // Particls JS For Background
    this.myStyle = {
      'position': 'fixed',
      'width': '100%',
      'height': '100%',
      'z-index': -1,
      'top': 0,
      'left': 0,
      'right': 0,
      'bottom': 0,
      'background': 'linear-gradient(to bottom, rgb(86, 20, 176), rgb(190, 68, 109))'
    };

    this.myParams = {
      particles: {
        number: {
          value: 200,
        },
        color: {
          value: '#fff000'
        },
        shape: {
          type: 'triangle',
        },
      }
    };
  }

}

// Interface for Shift Dropdown
export interface Shift {
  shiftType: string;
  shiftId: number;
}
import { Component, OnInit } from "@angular/core";
import { AnonymousSubject } from "rxjs/internal/Subject";

@Component({
  selector: "app-callerinformation",
  templateUrl: "./callerinformation.component.html",
  styleUrls: ["./callerinformation.component.css"],
})
export class CallerinformationComponent implements OnInit {
  // Call Type
  callTypes: callType[];
  selectedCallType: callType;

  // Chief Complaint
  chiefComplaints: chiefComplaint[];
  selectedChiefComplaint: chiefComplaint;
  // refreshIntervalId:any;
  constructor() {}

  ngOnInit() {
    this.callTypes = [
      { value: 0, label: "Select One" },
      { value: 1, label: "Call Type-1" },
      { value: 2, label: "Call Type-2" },
    ];
    this.chiefComplaints = [
      { value: 0, label: "Select One" },
      { value: 1, label: "Chief Complaint-1" },
      { value: 2, label: "Chief Complaint-2" },
    ];
  }

  // this.refreshIntervalId = setInterval(this.ngOnInit, 10000);
  //  myFunction() {
  //   var x = document.getElementsByClassName("example");
  // }
}

export interface callType {
  value: number;
  label: string;
}
export interface chiefComplaint {
  value: number;
  label: string;
}

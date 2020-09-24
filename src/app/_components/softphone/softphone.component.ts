import { Component, OnInit } from '@angular/core';
import { SoftphoneService } from '../../_services/softphone.service';

@Component({
  selector: 'app-softphone',
  templateUrl: './softphone.component.html',
  styleUrls: ['./softphone.component.css']
})
export class SoftphoneComponent implements OnInit {

  visible: boolean = true;
  dialPad: boolean = false; //For Dial pad Hiding or Showing
  isOpen: boolean = true; //For Soft phone Hiding or Showing
  // Soft Phone
  callAnswer() {
    this.visible = false;
    this.dialPad = true;
  }
  // Add Call Button
  addCall() {
    this.dialPad = false;
    this.visible = false;
  }
  // End Call Button
  endCall() {
    this.visible = true;
    this.dialPad = false;
  }
  unhold: boolean = false;
  unholdBtn() {
    this.unhold = !this.unhold;
  }
  constructor(private softPhoneService: SoftphoneService) { }

  ngOnInit() {
    this.softPhoneService.change.subscribe((softphone: boolean) => {
      this.isOpen = softphone;
    });
  }

}
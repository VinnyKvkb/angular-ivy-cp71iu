import { Component, OnInit } from "@angular/core";
import { SoftphoneService } from "../../_services/softphone.service";
import { SidenavService } from "../../_services/sidenavservice.service";
import { UserprofileComponent } from "../userprofile/userprofile.component";
import { MatDialog } from "@angular/material";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
  // User Profile
  userProfile() {
    this.dialog.open(UserprofileComponent, {
      width: "30%",
    });
  }

  // For Soft Phone
  softPhoneOPen() {
    this.softPhoneService.toggle();
  }
  // For Side nav
  openSidenav() {
    this.sideNavService.toggle();
  }

  // Search Bar
  searchToggle: boolean = true; //For Search Bar
  searchOpen() {
    this.searchToggle = false;
  }
  searchCloseBtn() {
    this.searchToggle = true;
  }

  constructor(
    private softPhoneService: SoftphoneService,
    private sideNavService: SidenavService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {}
}

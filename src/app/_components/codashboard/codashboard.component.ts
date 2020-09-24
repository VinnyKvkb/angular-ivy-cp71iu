import { Component, OnInit } from '@angular/core';
import { SidenavService } from 'src/app/_services/sidenavservice.service';

@Component({
  selector: 'app-codashboard',
  templateUrl: './codashboard.component.html',
  styleUrls: ['./codashboard.component.css']
})
export class CodashboardComponent implements OnInit {

  moveToggle: boolean = true;

  constructor(private sideNavService: SidenavService) { }

  ngOnInit() {
    // For Router Content Toggle
    this.sideNavService.change.subscribe((sideMenu: boolean) => {
      this.moveToggle = sideMenu;
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { SidenavService } from '../../_services/sidenavservice.service';
declare var $: any;

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent implements OnInit {

  isopen: boolean = true;

  constructor(private sideNavService: SidenavService) { }

  ngOnInit() {
    $("#metismenu").metisMenu();

    this.sideNavService.change.subscribe((sideMenu: boolean) => {
      this.isopen = sideMenu;
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { CoremarksComponent } from '../coremarks/coremarks.component';

@Component({
  selector: 'app-dispatchbuttons',
  templateUrl: './dispatchbuttons.component.html',
  styleUrls: ['./dispatchbuttons.component.css']
})
export class DispatchbuttonsComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }
  coRemarks() {
    this.dialog.open(CoremarksComponent, {
      width: '50%'
    })
  }
}

import { Component, OnInit } from "@angular/core";
import { SidenavService } from "../../_services/sidenavservice.service";

@Component({
  selector: "app-conotifications",
  templateUrl: "./conotifications.component.html",
  styleUrls: ["./conotifications.component.css"],
})
export class ConotificationsComponent implements OnInit {
  i: number = 0;
  // text: String = "Lorem ipsum dummy text blabla.";
  text = new String("This is string");
  speed: number = 90;
  demo: string;
  constructor() {}

  typeWriter() {
    if (this.i < this.text.length) {
      // document.getElementById("demo").innerHTML += this.txt.charAt(this.i);
      this.demo += this.text.charAt(this.i);

      this.i++;
      setTimeout(this.typeWriter, this.speed);
    }
  }
  myFunction() {
    for (let j = 0; j <= this.text.length; j++) {
      this.demo += this.text.charAt(j);
      setTimeout(this.myFunction, this.speed);
    }
  }
  ngOnInit() {
    //  this.typeWriter();

    this.myFunction();
  }
}

import { Component, OnInit } from "@angular/core";
import { bloodBankDetails } from "../../_models/details.model";
import { DetailsInfoService } from "../../_services/details-info.service";
import { SortEvent } from "src/app/_tableconstants/SortEvent";

@Component({
  selector: "app-bloodbanks",
  templateUrl: "./bloodbanks.component.html",
  styleUrls: ["./bloodbanks.component.css"],
})
export class BloodbanksComponent implements OnInit {
  ngOnInit() {}
}

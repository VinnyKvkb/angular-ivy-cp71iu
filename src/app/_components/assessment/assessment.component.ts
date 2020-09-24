import { Component, OnInit } from "@angular/core";
import { SortEvent } from "src/app/_tableconstants/SortEvent";
import { medicalAssesments } from "../../_models/assessment.model";
import { AssessmentService } from "../../_services/assessment.service";

@Component({
  selector: "app-assessment",
  templateUrl: "./assessment.component.html",
  styleUrls: ["./assessment.component.css"],
})
export class AssessmentComponent implements OnInit {
  cars: any[];

  responsiveOptions;

  constructor(private carService: AssessmentService) {
    this.responsiveOptions = [
      {
        breakpoint: "1024px",
        numVisible: 3,
        numScroll: 3,
      },
      {
        breakpoint: "768px",
        numVisible: 2,
        numScroll: 2,
      },
      {
        breakpoint: "560px",
        numVisible: 1,
        numScroll: 1,
      },
    ];
  }

  ngOnInit() {
    this.carService.getCarsSmall().then((cars) => {
      this.cars = cars;
    });
  }
}

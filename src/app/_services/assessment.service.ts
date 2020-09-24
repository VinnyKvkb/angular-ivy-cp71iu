import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { medicalAssesments } from "../_models/assessment.model";

@Injectable({
  providedIn: "root",
})
export class AssessmentService {
  constructor(private http: HttpClient) {}

  getCarsSmall() {
    return this.http
      .get<any>("assets/json/assesments.json")
      .toPromise()
      .then((res) => <medicalAssesments[]>res.data)
      .then((data) => {
        return data;
      });
  }
}

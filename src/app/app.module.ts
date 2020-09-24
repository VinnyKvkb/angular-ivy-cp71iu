// Angular Modules
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./app-routing.module";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

// External Modules
import { ParticlesModule } from "angular-particle";
import { primeNg } from "./primeNgControls";
import { AngularMaterialModule } from "./angularMaterialControls";
import { AgmCoreModule } from "@agm/core";

// Components
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { HeaderComponent } from "./_components/header/header.component";
import { FooterComponent } from "./_components/footer/footer.component";
import { SoftphoneComponent } from "./_components/softphone/softphone.component";
import { SidemenuComponent } from "./_components/sidemenu/sidemenu.component";
import { CallerinformationComponent } from "./_components/callerinformation/callerinformation.component";
import { CoComponent } from "./_components/co/co.component";
import { FollowupinformationComponent } from "./_components/followupinformation/followupinformation.component";
import { MapsComponent } from "./_components/maps/maps.component";
import { PatientsinformationComponent } from "./_components/patientsinformation/patientsinformation.component";
import { AddpatientComponent } from "./_components/addpatient/addpatient.component";
import { CodashboardComponent } from "./_components/codashboard/codashboard.component";
import { AssessmentComponent } from "./_components/assessment/assessment.component";
import { HospitaldetailsComponent } from "./_components/hospitaldetails/hospitaldetails.component";
import { DispatchbuttonsComponent } from "./_components/dispatchbuttons/dispatchbuttons.component";
import { CoremarksComponent } from "./_components/coremarks/coremarks.component";
import { BloodbanksComponent } from "./_components/bloodbanks/bloodbanks.component";
import { PolicestationsComponent } from "./_components/policestations/policestations.component";
import { HospitalspecializationsComponent } from "./_components/hospitalspecializations/hospitalspecializations.component";
import { NearestongoingincidentsComponent } from "./_components/nearestongoingincidents/nearestongoingincidents.component";
import { UserprofileComponent } from "./_components/userprofile/userprofile.component";
import { ConotificationsComponent } from "./_components/conotifications/conotifications.component";
import { AssessmentService } from "./_services/assessment.service";
import { CarouselModule } from "primeng/carousel";
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    SoftphoneComponent,
    SidemenuComponent,
    CallerinformationComponent,
    CoComponent,
    FollowupinformationComponent,
    MapsComponent,
    PatientsinformationComponent,
    AddpatientComponent,
    CodashboardComponent,
    AssessmentComponent,
    HospitaldetailsComponent,
    DispatchbuttonsComponent,
    CoremarksComponent,
    BloodbanksComponent,
    PolicestationsComponent,
    HospitalspecializationsComponent,
    NearestongoingincidentsComponent,
    UserprofileComponent,
    ConotificationsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    // External Modules
    ParticlesModule,
    primeNg,
    AngularMaterialModule,
    CarouselModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyCcBNzbPOZLjPn3PIzjfYWRjRDEG3rVtSE",
      libraries: ["places"],
    }),
  ],
  providers: [AssessmentService],
  entryComponents: [
    AddpatientComponent,
    AssessmentComponent,
    CoremarksComponent,
    HospitalspecializationsComponent,
    UserprofileComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

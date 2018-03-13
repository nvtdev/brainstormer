import { Component, OnInit } from "@angular/core";
import { MainService } from "../../services/main.service";

@Component({
  selector: "app-homepage",
  templateUrl: "./homepage.component.html",
  styleUrls: ["./homepage.component.css"]
})
export class HomepageComponent implements OnInit {
  sessionTitle: string;

  constructor(private mainService: MainService) {}

  ngOnInit() {}

  onSessionSubmit() {
    if (this.sessionTitle && this.sessionTitle != "") {
      this.mainService.startSession(this.sessionTitle).subscribe(response => {
        console.log(response);
      });
    }
  }
}

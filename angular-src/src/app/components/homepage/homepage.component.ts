import { Component, OnInit } from "@angular/core";
import { MainService } from "../../services/main.service";
import {Router} from '@angular/router';

@Component({
  selector: "app-homepage",
  templateUrl: "./homepage.component.html",
  styleUrls: ["./homepage.component.css"]
})
export class HomepageComponent implements OnInit {
  sessionTitle: string;

  constructor(private mainService: MainService, private router:Router) {}

  ngOnInit() {}

  onSessionSubmit() {
    if (this.sessionTitle && this.sessionTitle != "") {
      this.mainService.startSession(this.sessionTitle).subscribe(response => {
        if (response.success) {
          this.router.navigate(['session/' + response.session._id]);
        }
      });
    }
  }
}

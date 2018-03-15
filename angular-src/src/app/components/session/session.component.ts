import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { MainService } from "../../services/main.service";

@Component({
  selector: "app-session",
  templateUrl: "./session.component.html",
  styleUrls: ["./session.component.css"]
})
export class SessionComponent implements OnInit {
  sessionId: number;
  ideaTitle: string;
  ideaDescription: string;
  ideaUsername: string;

  constructor(
    private route: ActivatedRoute,
    private mainService: MainService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.sessionId = params["id"];
      console.log(this.sessionId);
    });
  }

  onIdeaSubmit() {
    const idea = {
      title: this.ideaTitle,
      description: this.ideaDescription,
      username: this.ideaUsername,
      sessionId: this.sessionId
    };

    this.mainService.addIdea(idea).subscribe(response => {
      console.log(response);
    });
  }
}

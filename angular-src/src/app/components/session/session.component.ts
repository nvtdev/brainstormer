import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { MainService } from "../../services/main.service";

@Component({
  selector: "app-session",
  templateUrl: "./session.component.html",
  styleUrls: ["./session.component.css"]
})
export class SessionComponent implements OnInit {
  session: Object;
  sessionId: number;
  ideaTitle: string;
  ideaDescription: string;
  ideaUsername: string;
  ideasForSession: Array<Object>;

  constructor(
    private route: ActivatedRoute,
    private mainService: MainService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.sessionId = params["id"];
      console.log(this.sessionId);
      this.mainService.getSession(this.sessionId).subscribe(response => {
        this.session = response.session;
      });

      this.mainService.getIdeas(this.sessionId).subscribe(response => {
        let ideas = response.ideas;

        for (let idea of ideas) idea.color = this.getRandomColor();

        this.ideasForSession = ideas;
      });
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
      if (response.success) {
        let lastIdea = response.ideas[response.ideas.length - 1];
        lastIdea.color = this.getRandomColor();
        this.ideasForSession.push(lastIdea);
      }
    });
  }

  addScore(ideaId, direction) {
    this.mainService
      .addScore(this.sessionId, ideaId, direction)
      .subscribe(response => {
        console.log(response.ideas);
        let count = 0;
        for (let idea of response.ideas) {
          this.ideasForSession[count]["score"] = idea.score;
          count++;
        }
      });
  }

  getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
}

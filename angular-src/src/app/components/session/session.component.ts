import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { MainService } from "../../services/main.service";

@Component({
  selector: "app-session",
  templateUrl: "./session.component.html",
  styleUrls: ["./session.component.css"]
})
export class SessionComponent implements OnInit {
  session: Object;
  sessionId: string;
  ideaTitle: string;
  ideaDescription: string;
  username: string;
  ideasForSession: Array<Object>;
  comments: Array<Object>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private mainService: MainService
  ) {}

  ngOnInit() {
    this.username = '';
    if (localStorage.getItem('username'))
      this.username = localStorage.getItem('username');
    else
      this.username = 'Anonymous';

    this.route.params.subscribe(params => {
      this.sessionId = params["id"];
      this.mainService.getSession(this.sessionId).subscribe(response => {
        this.session = response.session;
      });

      this.setSessionStorage();

      this.mainService.getIdeas(this.sessionId).subscribe(response => {
        this.ideasForSession = response.ideas;
      });

      this.mainService.getComments(this.sessionId).subscribe(response => {
        this.comments = response.comments;
      });
    });
  }

  setSessionStorage() {
      let sessions = localStorage.getItem('sessions');
      if (sessions) {
        if (!sessions.includes(this.sessionId))
          localStorage.setItem('sessions', sessions + ',' + this.sessionId);
      } else
        localStorage.setItem('sessions', this.sessionId);

  }

  setUsername() {
    if (this.username != '')
      localStorage.setItem('username', this.username);
  }

  onIdeaSubmit() {
    if (!this.username || this.username == "") return;

    const idea = {
      title: this.ideaTitle,
      description: this.ideaDescription,
      username: this.username,
      sessionId: this.sessionId,
      colour: this.getRandomColor()
    };

    this.mainService.addIdea(idea).subscribe(response => {
      if (response.success) {
        let lastIdea = response.ideas[response.ideas.length - 1];
        // lastIdea.color = this.getRandomColor();
        this.ideasForSession.push(lastIdea);
      }
    });
  }

  addScore(ideaId, direction) {
    let updatedIdeas = [];
    this.mainService
      .addScore(this.sessionId, ideaId, direction)
      .subscribe(response => {
        let count = 0;
        // for (let idea of response.ideas) {
        //   for (let currentIdea of this.ideasForSession) {
        //     if (currentIdea["_id"] == idea["_id"])
        //       this.ideasForSession[count]["score"] = idea.score;
        //   }
        //   count++;
        // }

        // for (let currentIdea of this.ideasForSession) {
        //   if (currentIdea["_id"] == response.idea._id) {
        //     this.ideasForSession[count]["score"] = response.idea.score;
        //   }
        //   count++;
        // }
        // this.ideasForSession.sort(this.sortArray);

        this.ideasForSession = response.ideas;
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

  getCommentsForIdea(ideaId) {
    let comments = [];
    for (let comment of this.comments) {
      if (comment["ideaId"] == ideaId) comments.push(comment);
    }
    return comments;
  }

  onEnter(element, value, ideaId) {
    // debugger;
    // return;

    if (value && value != "" && this.username && this.username != "") {
      this.mainService
        .addComment(value, ideaId, this.username, this.sessionId)
        .subscribe(response => {
          this.comments = response.comments;
        });
    }
  }

  sortArray(a, b) {
    if (a.last_nom < b.last_nom) return -1;
    if (a.last_nom > b.last_nom) return 1;
    return 0;
  }

  goBack() {
    this.router.navigate(['/']);
  }
}

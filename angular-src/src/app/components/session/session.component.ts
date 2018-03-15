import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.css']
})
export class SessionComponent implements OnInit {
  sessionId: number; 
  ideaTitle: string;
  ideaDescription: string;
  ideaUsername: string;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.sessionId = params['id'];
      console.log(this.sessionId);
    });
  }

  onIdeaSubmit() {
    const idea = {
      title: this.ideaTitle,
      description: this.ideaDescription,
      username: this.ideaUsername
    };

    console.log(idea);
  }

}

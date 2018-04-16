import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import "rxjs/add/operator/map";

@Injectable()
export class MainService {
  constructor(private http: Http) {}

  startSession(title) {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    return this.http
      .post("sessions/start", { title }, { headers })
      .map(res => res.json());
  }

  getSession(sessionId) {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("sessionid", sessionId);
    return this.http
      .get("sessions/get", { headers })
      .map(res => res.json());
  }

  getRecentSessions(sessionIds) {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("sessionIds", sessionIds);
    return this.http
      .get("sessions/getRecentSessions", { headers })
      .map(res => res.json());
  }

  addIdea(idea) {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    return this.http
      .post("ideas/add", { idea }, { headers })
      .map(res => res.json());
  }

  getIdeas(sessionId) {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("sessionid", sessionId);
    return this.http
      .get("ideas/get", { headers })
      .map(res => res.json());
  }

  addScore(sessionId, ideaId, direction) {
    let headers = new Headers(),
      score = {
        sessionId: sessionId,
        ideaId: ideaId,
        direction: direction
      };
    headers.append("Content-Type", "application/json");
    return this.http
      .post("ideas/addScore", { score }, { headers })
      .map(res => res.json());
  }

  addComment(text, ideaId, username, sessionId) {
    let headers = new Headers(),
      comment = {
        sessionId: sessionId,
        ideaId: ideaId,
        text: text,
        username: username
      };
    headers.append("Content-Type", "application/json");
    return this.http
      .post("comments/add", { comment }, { headers })
      .map(res => res.json());
  }

  getComments(sessionId) {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("sessionid", sessionId);
    return this.http
      .get("comments/get", { headers })
      .map(res => res.json());
  }
}

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
      .post("http://localhost:3000/sessions/start", { title }, { headers })
      .map(res => res.json());
  }

  addIdea(idea) {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    return this.http
      .post("http://localhost:3000/ideas/add", { idea }, { headers })
      .map(res => res.json());
  }

  getIdeas(sessionId) {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("sessionid", sessionId);
    return this.http
      .get("http://localhost:3000/ideas/get", { headers })
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
      .post("http://localhost:3000/ideas/addScore", { score }, { headers })
      .map(res => res.json());
  }
}

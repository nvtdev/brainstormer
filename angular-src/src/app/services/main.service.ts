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
    headers.append("sessionId", sessionId);
    return this.http
      .get("http://localhost:3000/ideas/get", { headers: headers })
      .map(res => res.json());
  }
}

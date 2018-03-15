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
}

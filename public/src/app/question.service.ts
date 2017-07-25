import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import "rxjs";

@Injectable()
export class QuestionService {
  constructor(private _http: Http) {}

  create(newQuestion) {
    return this._http
      .post("/users", newQuestion)
      .map(data => data.json())
      .toPromise();
  }
  authenticate(addQuestion) {
    console.log(addQuestion);
    return this._http
      .post("/session", addQuestion)
      .map(data => data.json())
      .toPromise();
  }
}

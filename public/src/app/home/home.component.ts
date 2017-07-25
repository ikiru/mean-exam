import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { UserService } from "../user.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  @Output() createUserEvent = new EventEmitter();
  newUser = {};

  constructor(private _userService: UserService, private _router: Router) {}

  propagateUser(newUser) {
    this.createUserEvent.emit(newUser);
  }

  // create the user
  createUser(newUser) {
    console.log("in app component");
    console.log(newUser);
    return this._userService
      .create(newUser)
      .then(user => {
        console.log(user);
        if (user.errors) {
          for (let key in user.errors) {
            let error = user.errors[key];
            // this.registrationErrors.push(error.message);
          }
        } else {
          this.propagateUser(user);
        }
      })
      .catch(err => {
        console.log(err);
      });
  }

  ngOnInit() {}
}

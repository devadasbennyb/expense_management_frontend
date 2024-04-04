import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, map, Observable } from "rxjs";
import { Router } from "@angular/router";
import { UserModel } from "@model/UserModel";
import { ResponseModel } from "@model/ResponseModel";
import { ENDPOINTS } from "@core/urls.util";
import { SERVERURL } from "@env/environment";
import { __values } from "tslib";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private currentTokenSubject: BehaviorSubject<String | any>;
  public currentToken: Observable<String>;

  private currentUserSubject: BehaviorSubject<UserModel | any>;
  public currentUser: Observable<UserModel>;

  private currentUsernameSubject: BehaviorSubject<any>;
  public currentUsername: Observable<UserModel>;

  constructor(private http: HttpClient, private router: Router) {
    //  local storage
    this.currentTokenSubject = new BehaviorSubject<String>(
      JSON.parse(localStorage.getItem("EXP_TOKEN")!)
    );
    this.currentUserSubject = new BehaviorSubject<UserModel>(
      JSON.parse(localStorage.getItem("EXP_USER")!)
    );

    this.currentUsernameSubject = new BehaviorSubject<String>(
      JSON.parse(localStorage.getItem("EXP_USERNAME")!)
    );

    this.currentUser = this.currentUserSubject.asObservable();
    this.currentToken = this.currentTokenSubject.asObservable();
    this.currentUsername = this.currentUsernameSubject.asObservable();
  }

  public get currentUserValue(): UserModel {
    console.log( this.currentUser)
    // this.currentUser = new UserModel(this.currentUser)
    return this.currentUserSubject.value;
  }
  public get currentTokenValue(): String {
    return this.currentTokenSubject.value;
  }
  public get currentUsernameValue(): String {
    return this.currentUsernameSubject.value;
  }

  signin(payload: {
    username: string;
    password: string;
  }): Observable<ResponseModel> {
    return this.http
      .post<ResponseModel>(`${SERVERURL + ENDPOINTS.SIGNIN}`, payload)
      .pipe(
        map((res: ResponseModel) => {
          // login successful if there's a jwt token in the response
          if (!res.hasError && res.results.token) {
            // local storage
            localStorage.setItem(
              "EXP_USER",
              JSON.stringify(res.results.profile)
            );
            console.log(res.results.profile)
            localStorage.setItem(
              "EXP_TOKEN",
              JSON.stringify(res.results.token)
            );
            localStorage.setItem(
              "EXP_USERNAME",
              JSON.stringify(res.results.username)
            );

            this.currentUserSubject.next(res.results.profile);
            this.currentTokenSubject.next(res.results.token);
            this.currentUsernameSubject.next(res.results.username);
          }
          return res;
        })
      );
  }

  logout() {
    localStorage.removeItem("EXP_USER");
    localStorage.removeItem("EXP_TOKEN");
    localStorage.removeItem("EXP_USERNAME");
    this.currentUserSubject.next(null);
    this.currentTokenSubject.next(null);
    this.currentUsernameSubject.next(null);
    this.router.navigate(["/signin"]);
  }
}

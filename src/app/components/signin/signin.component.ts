import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { AuthService } from "@service/auth.service";
import { MessageService } from "primeng/api";
import { Subscription } from "rxjs";

@Component({
  selector: "app-signin",
  templateUrl: "./signin.component.html",
  styleUrls: ["./signin.component.scss"],
})
export class SigninComponent implements OnInit {
  returnUrl!: string;
  subscription!: Subscription;
  loginForm!: FormGroup;
  loading = false;
  isSubmitted: boolean = false;
  isError: boolean = false;
  name: string="";

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private messageService: MessageService,
    private authService: AuthService
  ) {
    // redirect to home if already logged in
    if (this.authService.currentTokenValue) {
      this.router.navigate(["/"]);
    }
  }
  ngOnInit() {
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams["returnUrl"] || "/";

    this.loginForm = this.formBuilder.group({
      username: ["", Validators.required],
      password: ["", Validators.required],
    });
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  get f() {
    return this.loginForm.controls;
  }

  signIn() {
    this.isSubmitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    this.isError = false;

    this.authService
      .signin({
        username: this.f["username"].value,
        password: this.f["password"].value,
      })
      .subscribe({
        next: (r) => {
          this.router.navigate([this.returnUrl]);
        },
        error: (e) => {
          this.isError = true;
          this.messageService.add({
            key: "tst",
            severity: "error",
            summary: "Login Failed",
            detail: "Invalid credential",
          });
        },
        complete: () => console.info("complete"),
      });
  }
}

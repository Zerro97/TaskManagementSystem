import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { faUser, faClipboardCheck, faLock } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  faUser = faUser;
  faLock = faLock;

  constructor(private loginService : LoginService) { }

  ngOnInit(): void {
  }

  onLogin() {
    this.loginService.login();
  }

  onSignUp() {
    this.loginService.signUp();
  }
}

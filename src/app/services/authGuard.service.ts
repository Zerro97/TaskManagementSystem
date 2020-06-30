import { LoginService } from './login.service';
import { Injectable } from '@angular/core';
import { CanActivate, CanDeactivate, Router } from '@angular/router';

@Injectable()
export class AuthGuardSerivce implements CanActivate {
    constructor(private loginService : LoginService, private router: Router){}

    canActivate() {
        console.log("can activate");
        if (!this.loginService.getIsLoggedIn()) {
            this.router.navigateByUrl('/Login');
            return this.loginService.getIsLoggedIn();
        } else {
            return true;
        }
    }
}
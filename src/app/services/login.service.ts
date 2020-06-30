import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {
    private isLoggedIn : boolean = false;
    private token : string = '';

    constructor(private http : HttpClient) { }

    // Getter
    getToken() {
        return this.token;
    }

    getIsLoggedIn() {
        return this.isLoggedIn;
    }

    // Authorization
    login() {
        //this.http.get()
        this.isLoggedIn = true;
    }

    logout() {
        this.isLoggedIn = false;
    }

    signUp() {

    }
}
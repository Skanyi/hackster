import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';


@Injectable()
export class LoginService {
    private loginurl = "http://127.0.0.1:5000/auth/login";
    private loggedIn: boolean = false;

    constructor(private http:Http) {
        this.loggedIn = !!localStorage.getItem('token');
    }

    login(username: string, password: string){
        // set the headers of the post request
        let headers = new Headers({ 'Content-Type': 'application/json'});
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.loginurl, {username: username, password: password}, options)
                        .map((response: Response) => {
                // login successful if there's a token in the response
                let current_user = response.json();
                if (current_user && current_user.token) {
                    // store user details and token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', (current_user));
                    this.loggedIn = true;
                }
            });
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.loggedIn = false;
    }

    isLoggedIn() {
    return this.loggedIn;
  }

}

// this will have all the logic for user login
// can i have all the user authentication here, user registration

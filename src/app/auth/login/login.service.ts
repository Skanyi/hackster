import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';


@Injectable()
export class LoginService {
    private headers: Headers;
    private loggedIn: boolean = false;
    private loginurl = "http://127.0.0.1:5000/auth/login";
    
    constructor(private http:Http) {
        this.headers = new Headers();
        this.headers.append("Content-Type", "application/json");
        this.headers.append("Access-Control-Allow-Origin", "*");
        //this.loggedIn = !localStorage.getItem('Authorization');
     }

    login(username: string, password: string){
        // set the headers of the post request
        let options = new RequestOptions({ headers: this.headers });

        return this.http.post(this.loginurl, JSON.stringify({username: username, password: password}), options)
                        .map((response: Response) => {
                // login successful if there's a token in the response
                let current_user = response.json();
                if (current_user.Authorization) { 
                    // store user details and token in local storage to keep user logged in between page refreshes
                    //console.log(localStorage.setItem('username', response.json().username));
                    //console.log(localStorage.setItem('currentUser', JSON.stringify(current_user)));
                    // window.localStorage.setItem('username', response.json().username);
                    localStorage.setItem('Authorization', current_user.Authorization);
                    let token = window.localStorage.getItem('Authorization');
                    this.headers.append("Authorization", token);
                    localStorage.setItem('Headers', JSON.stringify(this.headers))
                    // this.loggedIn = true;                    
                    
                    return response.json().Authorization;
                   
                }
            });
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('Headers');
        // this.loggedIn = false;
    }

    // isLoggedIn(): boolean {
    //     return this.loggedIn;
    // }

    getHeaders(): Headers {
        let headers = JSON.parse(localStorage.getItem('Headers'));
        return headers;
    }

}
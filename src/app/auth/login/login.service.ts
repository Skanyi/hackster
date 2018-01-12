import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';


@Injectable()
export class LoginService {
    private headers: Headers;
    private loggedIn: boolean = false;
    private loginurl = "bucketlist-api-svc:5000/auth/login";
    
    constructor(private http: Http, private router: Router) {
        this.headers = new Headers();
        this.headers.append("Content-Type", "application/json");
        this.headers.append("Access-Control-Allow-Origin", "*");
        this.loggedIn = !!localStorage.getItem('Headers');
     }

    login(username: string, password: string){
        // set the headers of the post request
        let options = new RequestOptions({ headers: this.headers });

        return this.http.post(this.loginurl, JSON.stringify({username: username, password: password}), options)
                        .map((response: Response) => {
                // login successful if there's a token in the response
                let current_user = response.json();
                if (current_user.Authorization) { 
                    localStorage.setItem('username', current_user.username);
                    localStorage.setItem('Authorization', current_user.Authorization);
                    let token = localStorage.getItem('Authorization');
                    let user = localStorage.getItem('username');
                    this.headers.append("Authorization", token);
                    this.headers.append('username', user);
                    localStorage.setItem('Headers', JSON.stringify(this.headers))
                    this.loggedIn = true;                    
                    
                    return response.json().Authorization;
                   
                }
            });
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('username');
        localStorage.removeItem('Authorization');
        localStorage.removeItem('Headers');
        localStorage.clear();
        this.loggedIn = false;
        this.router.navigate(['/']);
        window.location.reload();
    }

    isLoggedIn(): boolean {
        return this.loggedIn;
    }

    getHeaders(): Headers {
        let headers = JSON.parse(localStorage.getItem('Headers'));
        return headers;
    }

}
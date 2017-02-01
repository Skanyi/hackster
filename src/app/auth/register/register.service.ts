import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { User } from './register'

@Injectable()
export class RegisterService {
    private registerurl = "http://127.0.0.1:5000/auth/register";

    constructor(private http:Http) {}

    create(user: User): Observable<User[]> {
        // set the headers of the post request
        let headers = new Headers({ 'Content-Type': 'application/json'});
        let options = new RequestOptions({ headers: headers });
        
        return this.http.post(this.registerurl, JSON.stringify(user), options)
                        .map((response: Response) => response.json())
                        .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //handles errors if any
    }
}

// this will have all the logic for user registration
// can i have all the user authentication here, user registration

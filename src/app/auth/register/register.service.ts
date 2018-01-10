import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { User } from './register'

@Injectable()
export class RegisterService {
    private registerurl = "http://127.0.0.1:5000/auth/register";

    constructor(private http:Http) {}

    create(user: User) {
        // set the headers of the post request
        let headers = new Headers({ 'Content-Type': 'application/json'});
        let options = new RequestOptions({ headers: headers });
        
        return this.http.post(this.registerurl, JSON.stringify(user), options)
                        .map((response: Response) => response)
                        .catch((error:any) => Observable.throw(error.json().error || 'Server error')); 
    }
}

// this will have all the logic for user registration
// can i have all the user authentication here, user registration

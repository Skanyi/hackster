import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { User } from './register'

@Injectable()
export class RegisterService {
    constructor(private http:Http) {}

    private registerurl = "http://127.0.0.1:5000/auth/register"

    create(user: User){
        return this.http.post(this.registerurl, JSON.stringify({ user }));
    }
}

// this will have all the logic for user registration
// can i have all the user authentication here, user registration and login 
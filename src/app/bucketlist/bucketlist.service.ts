// contains all the logic to access the rest api

import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Bucketlist } from './bucketlist';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class BucketlistService {
    constructor(private http:Http) {

    }
    private _bucketlisturl = 'http://127.0.0.1:5000'

    getBuckelist(){
        return this.http.get('${this._bucketlisturl}/buckelists')
                        .map(res => <Bucketlist[]> res.json())
                        .catch(this.handleError);
    }

    private handleError (error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'server error')
    }
}
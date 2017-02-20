import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { IBucketlist } from './bucketlist';
import { IBucketlistitem } from '../bucketlistitem/bucketlistitem';
import { LoginService } from '../auth/login/login.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do'; // allow us to display data in nice format
import 'rxjs/add/operator/catch';

@Injectable()
export class BucketlistService {
    private _bucketlisturl = 'http://127.0.0.1:5000/bucketlists';
    private headers: Headers;

    constructor(
        private http: Http, loginService: LoginService) {
            // set the headers that will be used by all the functions below
            this.headers = loginService.getHeaders();
        }

    // get all bucketlists of the logged in user
    public getBuckelists() {
        let options = new RequestOptions({ headers: this.headers });
        return this.http.get(this._bucketlisturl, options)
                        .map((response: Response) => <IBucketlist[]> response.json())
                        .do(data => console.log('All: ' + JSON.stringify(data)))
                        .catch(this.handleError);
    }

    // Get one specified bucketlist
    // getBucketlist(id: number): Observable<Bucketlist> {
    //     return  this.getBuckelists()
    //     .map((bucketlists: Bucketlist[]) => bucketlists.find(p => p.bucketlist_id === id));
    // }

    // create a new bucketlist
    createBucketlist(bucketlist: IBucketlist){
        let options = new RequestOptions({ headers: this.headers });

        return this.http.post(this._bucketlisturl, bucketlist, options)
                        .map((response: Response) => response.json())
                        .catch(this.handleError); 
    }

    // update a specific bucketlist
    updateBucketlist(bucketlist: IBucketlist): Observable<any> {
        let options = new RequestOptions({ headers: this.headers });
        return this.http.put((this._bucketlisturl + '/' + bucketlist.bucketlist_id), bucketlist, options)
                        .map(data => { console.log(data)})
                        .do(data => { console.log(data)})
                        .catch(this.handleError);
    }

    // delete a specific bucketlist
    deleteBucketlist(bucketlist: IBucketlist): Observable<any> {
        let options = new RequestOptions({ headers: this.headers });
        return this.http.delete((this._bucketlisturl + '/' + bucketlist.bucketlist_id), options)
                        .map(data => { console.log(data)})
                        .do(data => { console.log(data)})
                        .catch(this.handleError);

    }

    //  Services that handle the bucketlist items 

    // get all the bucketlist items of a specific bucketlist
    getBucketlistitems(bucketlistitem: IBucketlistitem) {
        let options = new RequestOptions({ headers: this.headers });
    
        return this.http.get((this._bucketlisturl + '/' + bucketlistitem.bucketlist_id), options)
                        .map((response: Response) => <IBucketlist[]> response.json())
                        .do(data => console.log('All: ' + JSON.stringify(data)))
                        .catch(this.handleError);
    }

    // create a new bucketlist item of a specific bucketlist
    createBucketlistitem(bucketlistitem: IBucketlistitem) {
        let options = new RequestOptions({ headers: this.headers })

        return this.http.post((this._bucketlisturl + '/' + bucketlistitem.bucketlist_id + '/items'), bucketlistitem, options)
                        .map((response: Response) => response.json())
                        .catch(this.handleError);
    }

    // update a bucketlist item of a specific bucketlist
    updateBucketlistitem(bucketlistitem: IBucketlistitem) {
        let options = new RequestOptions({ headers: this.headers })

        return this.http.put((this._bucketlisturl + '/' + bucketlistitem.bucketlist_id + '/items/' + bucketlistitem.item_id), bucketlistitem, options)
                        .map((response: Response) => response.json())
                        .catch(this.handleError);
    }

    // delete a bucketlist item of a specific bucketlist
    deleteBucketlistitem(bucketlistitem: IBucketlistitem) {
        let options = new RequestOptions({ headers: this.headers})

        return this.http.delete((this._bucketlisturl + '/' + bucketlistitem.bucketlist_id + '/items/' + bucketlistitem.item_id), options)
                        .map(data => { console.log(data)})
                        .do(data => { console.log(data)})
                        .catch(this.handleError);
    }

    private handleError (error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'server error')
    }
}

// user should be logged in to get a bucketlist or get all
// should be able to create a bucketlist
// when creating, updating or deleting a bucketlist, must ensure the data type is json, user is logged in set on the headers
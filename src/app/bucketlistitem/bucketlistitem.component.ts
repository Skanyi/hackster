import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IBucketlistitem } from './bucketlistitem';
// import { IBucketlist } from '../bucketlist/bucketlist';

import { BucketlistService } from '../bucketlist/bucketlist.service';

@Component({
    moduleId: module.id,
    templateUrl: 'bucketlistitem.component.html',
    styleUrls: ['./bucketlistitem.component.css'],
})

export class BucketlistItemComponent implements OnInit {
    model: any = {};
    errorMessage: string;
    items: IBucketlistitem[];
    // bucketlist: IBucketlist[];

    constructor(
        private _route: ActivatedRoute,
        private router: Router,
        private bucketlistService: BucketlistService,){}
    
    // pass the data of the current bucketlist item
    getModalValues(item_id, bucketlist_id, title, done) {
        this.model.item_id = item_id;
        this.model.bucketlist_id = bucketlist_id;
        this.model.title = title;
        this.model.done = done;
    }
    
    // get bucketlist items of a specific bucketlist
    ngOnInit(): void{
        this.model.bucketlist_id = this._route.snapshot.params['bucketlist_id'];
        this.bucketlistService.getBucketlistitems(this.model)
        .subscribe(
            items => this.items = items.items,
            error => this.errorMessage = <any>error);
    }

    // create a bucketlist item 
    createBucketlistitem(): void{
        this.model.bucketlist_id = this._route.snapshot.params['bucketlist_id'];
        this.bucketlistService.createBucketlistitem(this.model)
            .subscribe(
                data => { console.log(data)
                    if(data.json().message.includes('already exists')){
                        this.router.navigate(['/bucketlists/bucketlist_id/items']);
                    }
                    else{
                        this.router.navigate(['/bucketlists']); // for testing purposes change this url to the right one
                    }
                },
            );
            location.reload();
    }

    // update a specific bucketlist item
    updateBucketlistitem(): void{
        this.model.bucketlist_id = this._route.snapshot.params['bucketlist_id'];
        this.bucketlistService.updateBucketlistitem(this.model)
            .subscribe(
                data => { console.log(data)},
                (error) => { console.log(error)}
            );
            window.location.reload();
    }

    // delete a bucketlist
    deleteBucketlistitem(){
        this.model.bucketlist_id = this._route.snapshot.params['bucketlist_id'];
        this.bucketlistService.deleteBucketlistitem(this.model)
        .subscribe(
            data => { data },
            (error) => { error}
        );
        window.location.reload(true);
    }
}

import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

import { BucketlistService } from './bucketlist.service';
import { Bucketlist } from './bucketlist';
//import { Bucketlist } from './bucketlist';

@Component({
  moduleId: module.id,
  templateUrl: 'bucketlist.component.html'
})

export class BucketlistComponent implements OnInit {
  model: any = {};
  pageTitle: string = 'Bucketlist'
  errorMessage: string;
  bucketlists: Bucketlist[];

  constructor(
    private bucketlistService: BucketlistService,
    private router: Router,
    private _flashMessagesService: FlashMessagesService) {}

  ngOnInit(): void {
           this.bucketlistService.getBuckelists()
                     .subscribe(
                       bucketlists => this.bucketlists = bucketlists,
                       error =>  this.errorMessage = <any>error);
    }
    // creates a new bucketlist
    createBucketlist(): void{
        this.bucketlistService.createBucketlist(this.model)
            .subscribe(
                data => { console.log(data)
                    if(data.json().message === 'Bucketlist with that title already exists'){
                         this._flashMessagesService.show('Bucketlist with that title already exists', { timeout: 10000 });
                         this.router.navigate(['/bucketlists']);
                    }
                    else{
                        this.router.navigate(['/bucketlists']);
                        this._flashMessagesService.show('Bucketlist Created Succesfully!!!', { timeout: 5000 });
                    }
                },
                );
    }
}

// subscribes to the bucketlist.service so that it can get data from  the service / returned observable
// observable don't emit data until they are subscribed
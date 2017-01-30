import { Component, OnInit } from '@angular/core';
import { BucketlistService } from './bucketlist.service';
import { Bucketlist } from './bucketlist';

@Component({
  selector: 'list-bucketlist',
  templateUrl: 'app/bucketlist/bucketlist.component.html'
})
export class BucketlistComponent implements OnInit{
  bucketlists: Bucketlist[] = [];

  constructor(private bucketlistService : BucketlistService){}

  ngOnInit(){
      this.bucketlistService
      .getBuckelist()
      .subscribe(b => this.bucketlists=b)
  }
}
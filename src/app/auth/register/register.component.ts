import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

import { RegisterService } from './register.service'

@Component({
    moduleId: module.id,
    templateUrl: 'register.component.html',
    styleUrls: ['register.component.css'],
})

export class RegisterComponent {
    model: any = {};

    constructor(
        private _flashMessagesService: FlashMessagesService,
        private router: Router,
        private registerService: RegisterService) { }

    
    register() {
        this.registerService.create(this.model)
            .subscribe(
                data => {
                    if(data.json().message === "user with that username already exists"){
                         this._flashMessagesService.show('user with that username already exists', { timeout: 10000 });
                    }
                    else{
                        this.router.navigate(['/bucketlists']);
                        this._flashMessagesService.show('Registered Succesfully!!!', { timeout: 5000 });
                    }
                },
                );
    }
    
}
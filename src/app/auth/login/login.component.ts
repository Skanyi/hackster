import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

import { LoginService } from './login.service';

@Component({
    moduleId: module.id,
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.css'],
})

export class LoginComponent{
    model: any = {};
    errorMessage: string;

    constructor(
        private _flashMessagesService: FlashMessagesService,
        private router: Router,
        private loginService: LoginService) { }

    login() {
        this.loginService.login(this.model.username, this.model.password)
            .subscribe(
                data => {
                        this.router.navigate(['/bucketlists']);  
                        this._flashMessagesService.show('Logged in Succesfully', { timeout: 5000 });                      
                },
                error => {
                    this.errorMessage = error;
            });
     }

}
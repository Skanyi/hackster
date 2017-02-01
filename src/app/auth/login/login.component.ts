import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from './login.service';

@Component({
    moduleId: module.id,
    templateUrl: 'login.component.html'
})

export class LoginComponent{
    model: any = {};
    loading = false;

    constructor(
        private router: Router,
        private loginService: LoginService) { }

    login() {
        this.loading = true;
        this.loginService.login(this.model.username, this.model.password)
            .subscribe(
                data => {
                        this.router.navigate(['/bucketlists']);                        
                },
                error => {
                       this.loading = false;
            });
     }

}
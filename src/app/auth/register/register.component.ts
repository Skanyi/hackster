import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { RegisterService } from './register.service'

@Component({
    moduleId: module.id,
    templateUrl: 'register.component.html'
})

export class RegisterComponent{
    model: any = {};
    loading = false;

    constructor(
        private router: Router,
        private registerService: RegisterService) { }

    register() {
        this.loading = true;
        this.registerService.create(this.model)
            .subscribe(
                data => {
                    this.router.navigate(['/bucketlists']);
                },
                error => {
                    this.loading = false;
                });
    }

}
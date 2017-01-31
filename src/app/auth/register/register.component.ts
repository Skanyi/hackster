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

}
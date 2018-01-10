import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'status'})
export class StatusPipe implements PipeTransform {
    transform(value: boolean): string {
        switch(value){
            case false: return 'Not Done'
            case true: return 'Done';
        }
    }
}
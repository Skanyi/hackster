import {Pipe, PipeTransform} from '@angular/core';
import { IBucketlist } from './bucketlist';

@Pipe({name: 'bucketlistFilter'})
export class BucketlistFilterPipe implements PipeTransform {
    transform(value: IBucketlist[], term: string): IBucketlist[] {
        term = term ? term.toLocaleLowerCase(): null;
        return term ? value.filter((bucketlist: IBucketlist) => 
            bucketlist.title.toLocaleLowerCase().indexOf(term) !== -1) : value;
    }
}
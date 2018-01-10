/* Defines the product entity */
import { IBucketlistitem } from '../bucketlistitem/bucketlistitem'
export interface IBucketlist {
        bucketlist_id: number,
        title: string,
        description: string,
        items: IBucketlistitem[],
}


import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { Item } from './item';
export declare class MoreMenuItemComponent {
    item: Item;
    protected clickSource: Subject<{}>;
    click$: Observable<string>;
    triggerOnClick(): void;
}

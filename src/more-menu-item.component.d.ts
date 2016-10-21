import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
export declare class MoreMenuItemComponent {
    id: string;
    protected clickSource: Subject<{}>;
    click$: Observable<string>;
    triggerOnClick(): void;
}

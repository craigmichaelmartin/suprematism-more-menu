import { Subject } from 'rxjs/Subject';
export declare class ItemSelectable {
    item: any;
    onItemSelected(item: any): void;
}
export declare class ExampleNoOptions extends ItemSelectable {
}
export declare class ExampleRightAligned extends ItemSelectable {
}
export declare class ExampleMiddleAligned extends ItemSelectable {
}
export declare class ExampleLeftAligned extends ItemSelectable {
}
export declare class ExampleDynamicallyVivid extends ItemSelectable {
    vividSubject: Subject<{}>;
    activateOnHover(): void;
    deactivateOnHover(): void;
}
export declare class ExampleDynamicallyVividMiddleAligned extends ItemSelectable {
    vividSubject: Subject<{}>;
    activateOnHover(): void;
    deactivateOnHover(): void;
}
export declare class ExampleNotVividLeftAligned extends ItemSelectable {
}
export declare class ExampleNotVivid extends ItemSelectable {
}
export declare class ExampleVivid extends ItemSelectable {
}
export declare class ExampleVisible extends ItemSelectable {
}
export declare class ExampleNotVisible extends ItemSelectable {
}
export declare class ExampleDynamicallyVisible extends ItemSelectable {
    visibleSubject: Subject<{}>;
    activateOnHover(): void;
    deactivateOnHover(): void;
}
export declare class ExampleDynamicallyVisibleLeftAligned extends ItemSelectable {
    visibleSubject: Subject<{}>;
    activateOnHover(): void;
    deactivateOnHover(): void;
}
export declare class ExampleForDataGridUseCase extends ItemSelectable {
    visibleSubject: Subject<{}>;
    activateOnHover(): void;
    deactivateOnHover(): void;
}
export declare class PertinentExampleComponent {
}
export declare class AllExamplesComponent {
}

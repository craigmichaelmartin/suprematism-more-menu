export declare class ItemSelectable {
    itemId: string;
    onItemSelected(id: string): void;
}
export declare class ExampleNoDirectives extends ItemSelectable {
}
export declare class ExampleRightAligned extends ItemSelectable {
}
export declare class ExampleMiddleAligned extends ItemSelectable {
}
export declare class ExampleLeftAligned extends ItemSelectable {
}
export declare class ExampleDynamicallyVivid extends ItemSelectable {
    supreVivid: any;
    activateOnHover(): void;
    deactivateOnHover(): void;
}
export declare class ExampleDynamicallyVividMiddleAligned extends ItemSelectable {
    supreVivid: any;
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
    supreVisible: any;
    activateOnHover(): void;
    deactivateOnHover(): void;
}
export declare class ExampleDynamicallyVisibleLeftAligned extends ItemSelectable {
    supreVisible: any;
    activateOnHover(): void;
    deactivateOnHover(): void;
}
export declare class AppComponent {
}

export declare class ExpoMixpanelAnalytics {
    ready: boolean;
    token: string;
    storageKey: string;
    userId?: string | null;
    clientId?: string;
    platform?: string;
    model?: string;
    queue: any[];
    constants: {
        [key: string]: string | number | void;
    };
    superProps: any;
    brand?: string;
    constructor(token: any, storageKey?: string);
    register(props: any): void;
    track(name: string, props?: any): void;
    identify(userId?: string): void;
    reset(): void;
    people_set(props: any): void;
    people_set_once(props: any): void;
    people_unset(props: any): void;
    people_increment(props: any): void;
    people_append(props: any): void;
    people_union(props: any): void;
    people_delete_user(): void;
    _flush(): void;
    _people(operation: any, props: any): void;
    _pushEvent(event: any): Promise<Response>;
    _pushProfile(data: any): Promise<Response>;
}
export default ExpoMixpanelAnalytics;

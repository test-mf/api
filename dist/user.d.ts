export declare function isUserLogin(): boolean;
declare type UserNumber = {
    buyDate: Date;
    number: string;
    status: "active" | "block";
    type: "ABC" | "FREE" | "DEF";
};
export declare function getUserNumbers(): Promise<UserNumber[]>;
export {};

export function isUserLogin (): boolean {
    return true;
}

type UserNumber = {
    buyDate: Date,
    number: string
    status: "active" | "block"
    type: "ABC" | "FREE" | "DEF"
}

export async function getUserNumbers (): Promise<UserNumber[]> {
    return [
        {
            buyDate: new Date(),
            number: "7996123413",
            status: "active",
            type: "DEF"
        },
        {
            buyDate: new Date(),
            number: "88005553535",
            status: "block",
            type: "FREE"
        },
        {
            buyDate: new Date(),
            number: "7343581283",
            status: "active",
            type: "ABC"
        }
    ];
}
import { User, UserNumber } from "./types";
import { userNumbers, userInfo } from "../__mocks__/fixtures/userNumbers";

export function isUserLogin(): boolean {
	return localStorage.accessToken !== undefined;
}

export async function getUserInfo(): Promise<User> {
	return userInfo;
}

export async function getUserNumbers(): Promise<UserNumber[]> {
	return userNumbers;
}

export async function userSignIn(
	username: string,
	password: string
): Promise<User & { accessToken: string }> {
	const isCorrectCredentials = username === "test@test.ru" && password === "123";
	const accessToken = "124123w$#4$#ERH";

	if (!isCorrectCredentials) throw Error("User credentials not correct");

	localStorage.accessToken = accessToken;
	return { ...userInfo, accessToken };
}

export async function userSignOut(): Promise<void> {
	localStorage.removeItem("accessToken");
}

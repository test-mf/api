export type User = {
	id: number;
	firstName: string;
	middleName: string;
	lastName: string;
	createdAt: Date;
	email: string;
};

export type UserNumber = {
	buyDate: Date;
	number: string;
	status: "active" | "block";
	type: "ABC" | "FREE" | "DEF";
};

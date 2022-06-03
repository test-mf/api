import { User, UserNumber } from "../../src/types";

export const userNumbers: UserNumber[] = [
	{
		buyDate: new Date(),
		number: "7996123413",
		status: "active",
		type: "DEF",
	},
	{
		buyDate: new Date(),
		number: "88005553535",
		status: "block",
		type: "FREE",
	},
	{
		buyDate: new Date(),
		number: "7343581283",
		status: "active",
		type: "ABC",
	},
];

export const userInfo: User = {
	id: 1,
	email: "test@test.ru",
	firstName: "Имя",
	middleName: "Фамилия",
	lastName: "Отчество",
	createdAt: new Date(),
};

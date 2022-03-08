import fs from "fs";

const rootQuery = {
	hello: "Hello world",
	message: "server running!",
	status: 200,
};

const getListData = (): Array<any> => {
	const aux: any = fs.readFileSync("db.json");
	return JSON.parse(aux);
};

function list(search: string): any {
	const data = getListData();

	if (search) {
		let regex0: RegExp, regex1: RegExp, regex : RegExp;
		const searchHasSpace = search.indexOf(" ") > -1

		if (searchHasSpace) {
			const [s0, s1] = search.split(" ");
			regex0 = new RegExp(s0, "i");
			regex1 = new RegExp(s1, "i");
		} else {
			regex = new RegExp(search, "i");
		}

		return data.filter(({ name }) => {
			if (searchHasSpace) {
				return regex0.test(name) && regex1.test(name);
			} else {
				return regex.test(name);
			}
		});
	} else {
		return data;
	}
}

interface listSearchInput {
	name: string;
}

export const resolvers = {
	Query: {
		rootQuery: () => rootQuery,
		list: (_: any, { name }: listSearchInput) => list(name),
	},
	// Mutations: {...}
};

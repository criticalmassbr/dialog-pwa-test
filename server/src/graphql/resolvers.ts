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
		return data.filter((item) => {

			if (search.indexOf(" ") > -1) {
				// const [s0, s1] = search.split(" "); // dividir a string
				// return filterName(s0) && filterName(s1);
			} else {
				const regex = new RegExp(search, "i");

				const res = regex.test(item.name);
				return res;
			}
		});
	} else {
		return data;
	}
};

interface listSearchInput {
    name: string
}

export const resolvers = {
	Query: {
		rootQuery: () => rootQuery,
		list: (_: any, { name }: listSearchInput) => list(name),
	},
	// Mutations: {...}
};

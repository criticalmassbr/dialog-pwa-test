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

function list(name: String): any {
	const data = getListData();

	if (name) {
		const search = name.toLowerCase();

        return data.filter(({ name }) => {
			const auxName = name.toLowerCase();
			return (auxName.indexOf(search) > -1);
		});
	} else {
		return data;
	}
};

interface listSearchInput {
    name: String
}

export const resolvers = {
	Query: {
		rootQuery: () => rootQuery,
		list: (_: any, { name }: listSearchInput) => list(name),
	},
	// Mutations: {...}
};

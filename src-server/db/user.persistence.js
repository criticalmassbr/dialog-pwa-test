const json = require('./db.json')

module.exports = {
    buscar_pelo_nome: function (nome) {
        let regex = new RegExp(nome, 'gmi')
        let results = json.filter(user => regex.test(user.name));
        return results;
    },
    buscar_pelo_id: function (id) {

        let user = json.find(user => user._id == id);

        if (!user) {
            let all_users = json.reduce((acc, user) => {
                acc.push(user)
                return acc.concat(user.friends);
            }, []);
            user = all_users.find(user => user._id == id);
        }

        return user;
    }
}
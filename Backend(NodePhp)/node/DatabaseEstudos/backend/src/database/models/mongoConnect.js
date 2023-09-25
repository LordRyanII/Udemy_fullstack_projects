const { MongoClient } = require('mongodb');

class MongoConnect {
    async connect(uri) {
        try {
            const client = new MongoClient(uri);
            await client.connect();
            const db = client.db('teste');
            console.log("Database ok!");
            console.log('----------------------------------------');
        } catch (error) {
            console.log('Erro ao conectar ao banco de dados:');
            console.log('----------------------------------------');
            console.log(error);
        }
    }
}

module.exports = MongoConnect;

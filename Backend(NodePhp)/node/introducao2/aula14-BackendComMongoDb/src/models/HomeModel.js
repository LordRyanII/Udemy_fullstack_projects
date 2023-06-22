const mongoose = require('mongoose');

const HomeSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: true
    },
    descricao: {
        type: String,
    }
});
const homeModel = mongoose.model('Home', HomeSchema);

module.exports = homeModel
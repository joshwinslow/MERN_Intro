const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let CatSchema = new Schema({
    name: {type: String, required: true},
    rarity: {type: String, required: true},
    description: {type: String, required: true}
});

module.exports = mongoose.model('Cat', CatSchema);
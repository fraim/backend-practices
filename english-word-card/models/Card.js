const { Schema, model } = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');

const cardSchema = new Schema({
    eng_word: {
        type: String,
        required: true,
        min: 1,
        max: 20,
    },
    rus_word: {
        type: String,
        required: true,
        min: 1,
        max: 20,
    },
    eng_part_of_speech: {
        type: String,
        required: true,
        min: 1,
        max: 20,
    },
    rus_part_of_speech: {
        type: String,
        required: true,
        min: 1,
        max: 20,
    },
    front_img: {
        type: String,
        required: true,
        min: 1,
        max: 1024,
    },
    back_img: {
        type: String,
        required: true,
        min: 1,
        max: 1024,
    },
    card_id: {
        type: Number,
        required: true,
        unique: true,
    }
});

cardSchema.plugin(autoIncrement.plugin, { model: 'Card', field: 'card_id' });

module.exports = model('Card', cardSchema);
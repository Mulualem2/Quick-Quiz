const mongoose = require('mongoose')

const Schema = mongoose.Schema

const ratingSchema = new Schema({
    user_id: { type: Schema.Types.ObjectId, ref: 'User' },
    question_pack_id: { type: Schema.Types.ObjectId, ref: 'Question_Pack' },
    rating: { type: Number }
}, {
    timestamps: true,
})

const Rating = mongoose.model('Rating', ratingSchema)

module.exports = Rating
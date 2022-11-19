const mongoose = require('mongoose')

const Schema = mongoose.Schema

const correctAnswersSchema = new Schema({
    answer: {
        type: String,
    },
    question_id: { type: Schema.Types.ObjectId, ref: 'User_Questions' }
}, {
    timestamps: true,
})

const Correct_Answers = mongoose.model('Correct_Answers', correctAnswersSchema)

module.exports = Correct_Answers
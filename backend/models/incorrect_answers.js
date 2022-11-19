const mongoose = require('mongoose')

const Schema = mongoose.Schema

const incorrectAnswersSchema = new Schema({
    answer: {
        type: String,
    },
    question_id: { type: Schema.Types.ObjectId, ref: 'User_Questions' }
}, {
    timestamps: true,
})

const Incorrect_Answers = mongoose.model('Incorrect_Answers', incorrectAnswersSchema)

module.exports = Incorrect_Answers
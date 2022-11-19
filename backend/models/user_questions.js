const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userQuestionsSchema = new Schema({
    pack_name: {
        type: Schema.Types.ObjectId,
        ref: 'Question_Pack'
    },
    question: {
        type: String,
        required: true,
    }
}, {
    timestamps: true,
})

const User_Questions = mongoose.model('User_Questions', userQuestionsSchema)

module.exports = User_Questions
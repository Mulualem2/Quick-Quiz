const mongoose = require('mongoose')

const Schema = mongoose.Schema

const questionPackSchema = new Schema({
    pack_name: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
    },
    user_id: { type: Schema.Types.ObjectId, ref: 'User' }
}, {
    timestamps: true,
})

const Question_Pack = mongoose.model('Question_Pack', questionPackSchema)

module.exports = Question_Pack
const mongoose = require('mongoose')

const Question_Pack = require('../models/question_pack.model')
const Correct_Answers = require('../models/correct_answers')
const Incorrect_Answers = require('../models/incorrect_answers')
const User_Questions = require('../models/user_questions')

exports.addQuiz = (req, res) => {
    //TODO: add user authentication
    const { pack_name, description, questions } = req.body
    var newQuizPack = new Question_Pack({
        pack_name: pack_name,
        description: description,
    })

    newQuizPack.save((err, quiz_pack) => {
        if (err) res.send({ status: err })

        const quiz_pack_id = quiz_pack._id

        questions.forEach(async (question) => {

            var newQuestion = new User_Questions({
                question: question.question,
                pack: quiz_pack_id
            })

            newQuestion.save((err, addedQuestion) => {
                if (err) res.send({ status: err })

                const question_id = addedQuestion._id

                var newCorrectAnswer = new Correct_Answers({
                    answer: question.correctAnswer,
                    question_id: question_id,
                })

                newCorrectAnswer.save((err, addedCorrectAnswer) => {
                    if (err) res.send({ status: err })

                    var incorrect_answers = question.incorrectAnswers.map(incorrectAnswer => ({
                        answer: incorrectAnswer,
                        question_id: question_id
                    }))

                    Incorrect_Answers.collection.insertMany(incorrect_answers)
                        .then(() => res.send({ status: 'quiz added!!!!!' }))
                        .catch(err => res.send({ status: err }))
                })
            })
        });
    })
}
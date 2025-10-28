const mongoose = require('mongoose')
const { Schema } = mongoose;

const answerSchema = new Schema({
    questionId: {
        type: String,
        required: true,
    },
    value: {
        type: String,
    }
})

const responseSchema = new Schema({
    formId: {
        type: Schema.Types.ObjectId,
        ref: 'Form', //connect to Form object
        required: true,
    },
    answers: [answerSchema],
    submittedAt: {
        type: Date,
        default: Date.now,
    },
});

const Response = mongoose.model('Response', responseSchema);

module.exports = Response;
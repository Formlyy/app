const mongoose = require('mongoose');
const {Schema} = mongoose;

const questionSchema = new Schema({
    label: {
        type: String,
        required: true,
    },
    
    type: {
        type: String,
        required: true,
        enum: ['checkbox', 'paragraph', 'multiple-choice', 'text'],
    },

    options: {
        type: [String],
        required: false,
    },
    
    required: {
        type: Boolean,
        default: 'false'
    }

});

const formSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    questions: [questionSchema], // An array of question sub-documents
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Form = mongoose.model('Form', formSchema);
module.exports = Form;
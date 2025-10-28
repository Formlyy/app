const Form = require('../models/formSchema');
const Response = require('../models/responseSchema');


exports.createForm = async (req, res) => {
    try {

        const { title, description, questions } = req.body;

        if (!title || !questions) {
            return res.status(400).json({ msg: 'Please provide a title and questions' });
        }

        const newForm = new Form({
            title,
            description,
            questions,
        });

        const savedForm = await newForm.save();
        res.status(201).json(savedForm);
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: 'Server error' });
    }
};


exports.getFormById = async (req, res) => {
    try {
        const form = await Form.findById(req.params.id);
        if (!form) {
            return res.status(404).json({ msg: 'Form not found' });
        }
        res.status(200).json(form);
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: 'Server error' });
    }
};



exports.submitResponse = async (req, res) => {
    try {
        const formId = req.params.id;
        const { answers } = req.body;

        const form = await Form.findById(formId);
        if (!form) {
            return res.status(404).json({ msg: 'Form not found' });
        }

        const newResponse = new Response({
            formId: formId,
            answers: answers,
        });

        await newResponse.save();
        res.status(201).json({ msg: 'Response submitted successfully!' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: 'Server error' });
    }
};


exports.getFormResponses = async (req, res) => {
    try {
        const formId = req.params.id;
        const form = await Form.findById(formId);
        if (!form) {
            return res.status(404).json({ msg: 'Form not found' });
        }

        // Find all responses that match the formId
        const responses = await Response.find({ formId: formId });
        res.status(200).json(responses);
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: 'Server error' });
    }
};

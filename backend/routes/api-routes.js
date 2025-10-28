const express = require('express');
const router = express.Router();
const formController = require('../controllers/form-controller');


router.post('/forms', formController.createForm);

router.get('/forms/:id', formController.getFormById);

router.post('/forms/:id/submit', formController.submitResponse);

router.get('/forms/:id/responses', formController.getFormResponses);


router.get('/', (req, res) => {
    res.json({ msg: "This is the API base route" });
});

module.exports = router;

var express = require('express');
var router = express.Router();
var ctrlTestAnswers = require('../controllers/test-answers');

// LOCATIONS ROUTERS
router.post('/test-answers', ctrlTestAnswers.testAnswersCreate);
router.get('/test-answers', ctrlTestAnswers.testAnswersRead);
router.get('/test-answers/:path', ctrlTestAnswers.testAnswersReadOne);

module.exports = router;

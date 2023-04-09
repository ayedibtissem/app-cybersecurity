const express = require('express');
const router = express.Router();
const quizController = require('../controllers/quiz.controller');



router.post('/quiz', quizController.createQuiz);
router.get('/quiz/:category', quizController.getQuizzesByCategory);

module.exports = router;

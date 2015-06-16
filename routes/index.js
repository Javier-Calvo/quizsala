var express = require('express');
var router = express.Router();
var quizController = require("../controllers/quiz_controller");

// Carga la pagina de inicio
router.get('/', function(req, res) {
  res.render('index', { title: 'Quiz' });
});

// Carga la pagina de creditos
router.get('/author', function(req, res) {
  res.render('author');
});

//Controladores para preguntas y respuestas
router.get("/quizes/question", quizController.question);
router.get("/quizes/answer", quizController.answer);

module.exports = router;

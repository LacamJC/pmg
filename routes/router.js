const express = require('express')

const router = express.Router()

router.get('/', function(req,res) {
    res.render('../views/index.ejs')
});

router.get('/tabelaFuncao', function(req,res) {
    res.render('../views/math/frequencia.ejs')
});

router.get('/calculadora', function(req,res) {
    res.render('../views/math/calculadora.ejs')
});

router.get('/aumentoSalarial', function(req,res) {
    res.render('../views/math/aumentoSalarial.ejs')
})

router.get('/calculadorav2', function(req,res) {
    res.render('../views/math/calculadorav2.ejs')
})

router.get('/calculadorav3', function(req,res) {
    res.render('../views/math/calculadorav3.ejs')
})

router.get('/emprestimo', function(req,res) {
    res.render('../views/math/emprestimo.ejs')
})

router.get('/media', function(req,res) {
    res.render("../views/math/media.ejs")
})

router.get('/tabuada', function(req,res) {
    res.render('../views/math/tabuada.ejs')
})
module.exports = router
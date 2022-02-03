const { application } = require('express')
const express = require('express') // Importando o express

const app = express() // Iniciando o express

// Rota Inicial
app.get('/', function(req, res){
    res.send('<h1>Bem Vindo a Home Page!</h1>')
})

app.get('/blog/:artigo?', function(req, res){
    let artigo = req.params.artigo

    if (artigo) {
        res.send('<h2>Artigo: ' + artigo + ' </h2>')
    } else {
        
        res.send('<h3>Bem Vindo ao Meu Blog! Disponível em: https://masterbare.netlify.app/</h3>')
    }

})

app.get('/canal/youtube', function(req, res){
    let canal = req.query['canal']
    
    if(canal){
        res.send(canal)
    } else {
        res.send('Nenhum canal fornecido!')
    }
})

app.get('/ola/:nome/:empresa', function(req, res){
    // REQ => SÃO OS DADOS ENVIADOS PELO USUÁRIO
    // RES => É A RESPOSTA QUE VAI SER ENVIADA PARA O USUÁRIO
    let nome = req.params.nome
    let empresa = req.params.empresa
    res.send('<h1>Oi ' + nome + ' do ' + empresa + '</h1>')
})


// Porta de acesso do servidor
app.listen(4000, function(erro){
    if(erro){
        console.log('Ocorreu um erro!')
    } else {
        console.log('Servidor iniciado com sucesso!')
    }
})







const express = require('express');
const router = express.Router();

// Importiamo i dati
const posts = require('../data/posts');

// INDEX
router.get('/', function (req, res) {
    res.json(posts); // restituisce tutti i post
});

// SHOW
router.get('/:id', function (req, res) {
    const id = parseInt(req.params.id);
    const post = posts.find(p => p.id === id);

    if (!post) {
        return res.status(404).json({
            error: 'Not Found',
            message: 'Post non trovato'
        });
    }

    res.json(post);
});

// DESTROY
router.delete('/:id', function (req, res) {
    const id = parseInt(req.params.id);
    const index = posts.findIndex(p => p.id === id);

    if (index === -1) {
        return res.status(404).json({
            error: 'Not Found',
            message: 'Post non trovato'
        });
    }

    posts.splice(index, 1);
    console.log(posts); // stampiamo la lista aggiornata
    res.sendStatus(204); // nessun contenuto
});

module.exports = router;

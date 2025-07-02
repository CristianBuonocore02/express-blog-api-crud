const express = require('express');
const router = express.Router();

// Importiamo i dati
const posts = require('../data/posts');

// INDEX
router.get('/', (req, res) => {
    res.json(posts); // restituisce tutti i post
});

// SHOW
router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const post = posts.find(p => p.id === id);

    if (!post) {
        res.status(404);
        return res.json({
            error: 'Not Found',
            message: 'Post non trovato'
        });
    }

    res.json(post);
});


//POST
router.post("/", (req, res) => {
    console.log(req.body);
    res.send("inoltrato")

})


// DESTROY
router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const post = posts.find(p => p.id === id);

    if (!post) {
        res.status(404);
        return res.json({
            error: 'Not Found',
            message: 'Post non trovato'
        });
    }

    posts.splice(post, 1);
    console.log(posts); // stampiamo la lista aggiornata
    res.sendStatus(204); // nessun contenuto
});


module.exports = router;

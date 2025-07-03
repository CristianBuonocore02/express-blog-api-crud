const express = require('express');
const app = express();
const port = 3000
app.use(express.json())
app.use(express.static('public'));

const postRoutes = require('./routes/posts'); //  importiamo le rotte

app.use('/posts', postRoutes); // assegnate alla rotta base /posts

app.listen(port, () => {
    console.log(`Server avviato su http://localhost:${port}`);
});

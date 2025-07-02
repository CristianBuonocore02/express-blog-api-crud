const express = require('express');
const app = express();
const port = 3000
app.use(express.json())

const postRoutes = require('./routes/posts'); //  importiamo le rotte

app.use('/posts', postRoutes); //  assegnate alla rotta base /posts

app.listen(port, () => {
    console.log(`Server avviato su http://localhost:${port}`);
});

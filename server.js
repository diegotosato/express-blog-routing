const express = require('express')
const app = express()
const PORT = 3000

//import router
const postsRouter = require('./routers/posts')

//rendo la cartella public un asset statico
app.use(express.static('public'))

//metto il server in ascolto
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
})
//creo il mio entrypoint
app.get('/', (req, res) => {
    res.send('Home Page')
})



//Resource: Posts
app.use('/api/posts', postsRouter)
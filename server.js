const express = require('express')
const app = express()
const PORT = 3000

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
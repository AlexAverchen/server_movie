const express = require('express')

const genreRouter = require('./routes/genre.routes')
const movieRouter = require('./routes/movie.routes')

const PORT = process.env.PORT || 8080

const app = express()
app.use(express.json())

app.use('/api', genreRouter)
app.use('/api', movieRouter)
app.listen(PORT, () => console.log(`port ${PORT}`))

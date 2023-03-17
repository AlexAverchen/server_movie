const Router = require('express')
const router = new Router()
const movieController = require('../controller/movie.controller')

router.post('/movie', movieController.createMovie)
router.post('/movie/:id/genres', movieController.addGenreToMovie) //........../api/movie/1/genres  
/* {
    "genreIds":[1, 2]  в таблицу movie_genres добавляются индексы фильма и соответствующих им жанров
    Практичней пока не получилось, дело опыта)
} */

router.get('/movie/:id', movieController.getMovie)
router.get('/movie', movieController.getMovies)
router.put('/movie', movieController.updateMovie)
router.delete('/movie/:id', movieController.deleteMovie)


module.exports = router
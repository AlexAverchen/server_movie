const db = require('../db')

class movieController {
    async createMovie(req, res) {
        try {
          const {name, year} = req.body
          const newMovie = await db.query(`INSERT INTO movies (name, year) VALUES ($1, $2) RETURNING *`, [name, year]);
          
          res.json(newMovie.rows[0]);

        } catch(err) {
          console.error(err);
          res.status(500).send('Server error!');
        }
    }
    async addGenreToMovie(req, res) {
        try {
          const movieId = parseInt(req.params.id)
          const {genreIds} = req.body
          if (!genreIds) {
            return res.status(400).send("Не удалось добавить жанры. Вы не указали жанры для добавления")
          }
          const values = genreIds.map(genreId => `(${movieId}, ${genreId})`).join(',');
          const genresMovie = await db.query(`INSERT INTO movie_genres (movies_id, genres_id) VALUES ${values}`);
              
          res.json(genresMovie.rows[0]);
    
        } catch(err) {
          console.error(err);
          res.status(500).send('Server error!');
        }
    };
    async getMovie(req, res) {
        const id = req.params.id
        try {
          const movie = await db.query('SELECT * FROM movies where id = $1', [id])
          res.json(movie.rows[0])
        } catch(err) {
          console.error(err);
          res.status(500).send('Server error!');
        }
    };
    async getMovies(req, res) {
        try {
          const movies = await db.query('SELECT * FROM movies')
          res.json(movies.rows)
        } catch(err) {
          console.error(err);
          res.status(500).send('Server error!');
        }
    };
    async updateMovie(req, res) {
        const {id, name, year} = req.body
        try {
          const movie = await db.query('UPDATE movies set name = $1, year = $2 where id = $3 RETURNING *', [name, year, id])
          res.json(movie.rows[0])
        } catch(err) {
          console.error(err);
          res.status(500).send('Server error!')
        }
    };
    async deleteMovie(req, res) {
        const id = req.params.id
        try {
          const movie = await db.query('DELETE FROM movies where id = $1', [id])
          res.json(movie.rows[0])
        } catch(err) {
          console.error(err);
          res.status(500).send('Server error!')
    }
};
}

module.exports = new movieController()


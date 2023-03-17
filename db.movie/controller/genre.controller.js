const db = require('../db')

class genreController {
    async createGenre(req, res) {
        const {name} = req.body
        try {
          const newGenre = await db.query(`INSERT INTO genres (name) values ($1) RETURNING *`, [name])
          res.json(newGenre.rows[0])
        } catch(err) {
          console.error(err);
          res.status(500).send('Server error!');
        }
    }
    async getGenre(req, res) {
        const id = req.params.id
        try {
          const genre = await db.query(`SELECT * FROM genres where id = $1`, [id])
          res.json(genre.rows[0])
        } catch(err) {
          console.error(err);
          res.status(500).send('Server error!');
        }
    }
    async getGenres(req, res) {
        try {
          const genres = await db.query(`SELECT * FROM genres`)
          res.json(genres.rows)
        } catch(err) {
          console.error(err);
          res.status(500).send('Server error!');
        }
    }
    async updateGenre(req, res) {
        const {id, name} = req.body
        try {
          const genre = await db.query(`UPDATE genres set name = $1 where id = $2 RETURNING *`, [name, id])
          res.json(genre.rows[0])
        } catch(err) {
          console.error(err);
          res.status(500).send('Server error!');
        }
    }
    async deleteGenre(req, res) {
        const id = req.params.id
        try {
          const genre = await db.query(`DELETE FROM genres where id = $1`, [id])
          res.json(genre.rows[0])
        } catch(err) {
          console.error(err);
          res.status(500).send('Server error!');
        }
    }
}

module.exports = new genreController()
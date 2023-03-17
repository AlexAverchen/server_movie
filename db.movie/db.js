const Pool = require('pg').Pool
const pool = new Pool({
    user: "postgres",
    password: "galogen1995",
    host: "localhost",
    port: 5432,
    database: "movies_genre"
})

module.exports = pool
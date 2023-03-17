CREATE DATABASE movies_genre;

CREATE TABLE IF NOT EXISTS genres (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS movies (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    year INTEGER NOT NULL
);

CREATE TABLE movie_genres (
  movies_id INT REFERENCES movies(id),
  genres_id INT REFERENCES genres(id),
  PRIMARY KEY (movies_id, genres_id)
);

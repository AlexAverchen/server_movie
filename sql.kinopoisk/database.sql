
create TABLE person(
    id INTEGER PRIMARY KEY,
    name VARCHAR(255),
    birth_date DATE,
    nationality VARCHAR(255)
);

create TABLE film(
    id INTEGER PRIMARY KEY,
    title VARCHAR(255),
    director_id INTEGER,
    screenplay_writer_id INTEGER,
    cinematographer_id INTEGER,
    composer_id INTEGER,
    editor_id INTEGER,
    production_designer_id INTEGER,
    release_date DATE,
    plot VARCHAR(255),
    country_id INTEGER,
    FOREIGN KEY (director_id) REFERENCES person (id),
    FOREIGN KEY (screenplay_writer_id) REFERENCES person (id),
    FOREIGN KEY (cinematographer_id) REFERENCES person (id),
    FOREIGN KEY (editor_id) REFERENCES person (id),
    FOREIGN KEY (production_designer_id) REFERENCES person (id),
    FOREIGN KEY (country_id) REFERENCES country(id)
);

create TABLE film_person(
    id INTEGER PRIMARY KEY,
    film_id INTEGER,
    person_id INTEGER,
    role VARCHAR(255),
    FOREIGN KEY (film_id) REFERENCES film (id),
    FOREIGN KEY (person_id) REFERENCES person (id)
);

create TABLE genre(
    id INTEGER PRIMARY KEY,
    name VARCHAR(255)
);

create TABLE film_genre(
    id INTEGER PRIMARY KEY,
    film_id INTEGER,
    genre_id INTEGER,
    FOREIGN KEY (film_id) REFERENCES film (id),
    FOREIGN KEY (genre_id) REFERENCES genre (id)
);

create TABLE country(
    id INTEGER PRIMARY KEY,
    name VARCHAR(255)
);
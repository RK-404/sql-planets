DROP DATABASE IF EXISTS psql_db;
CREATE DATABASE psql_db;

\c psql_db;

DROP TABLE IF EXISTS planets;

CREATE TABLE planets (
 id SERIAL PRIMARY KEY,
 name TEXT NOT NULL,
 type TEXT NOT NULL,
 planet_order NUMERIC,
 sun_distance TEXT,
 radius TEXT,
 day_length TEXT,
 year_length TEXT,
 moons NUMERIC,
 description TEXT,
 nasa_link TEXT,
 img_src TEXT,
 is_primary BOOLEAN
);
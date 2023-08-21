DROP DATABASE IF EXISTS psql_db;
CREATE DATABASE psql_db;

\c psql_db;

DROP TABLE IF EXISTS planets;

CREATE TABLE planets (
 id SERIAL PRIMARY KEY,
 name VARCHAR NOT NULL,
 type VARCHAR NOT NULL,
 planet_order SMALLINT,
 sun_distance VARCHAR,
 radius VARCHAR,
 day_length VARCHAR,
 year_length VARCHAR,
 moons SMALLINT,
 description TEXT,
 nasa_link TEXT,
 img_src TEXT,
 is_primary BOOLEAN
);
-- Eliminamos las tablas si existen
DROP TABLE IF EXISTS links;
DROP TABLE IF EXISTS users;

-- Eliminamos la extensión "uuid-ossp" si existe
DROP EXTENSION IF EXISTS "uuid-ossp";

-- Creamos la extensión "uuid-ossp" para poder generar UUIDs
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Creamos la tabla "users"
CREATE TABLE IF NOT EXISTS users (
  id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
  username TEXT NOT NULL UNIQUE,
  email TEXT NOT NULL UNIQUE,
  password TEXT NOT NULL
);

-- Creamos la tabla "links"
CREATE TABLE IF NOT EXISTS links (
  id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
  short_url TEXT NOT NULL UNIQUE,
  origin_url TEXT NOT NULL,
  uses_by_creator INTEGER DEFAULT 0,
  uses INTEGER DEFAULT 0,
  creation_date DATE NOT NULL DEFAULT NOW(),
  created_by uuid REFERENCES users (id)
    ON UPDATE CASCADE
    ON DELETE CASCADE
);

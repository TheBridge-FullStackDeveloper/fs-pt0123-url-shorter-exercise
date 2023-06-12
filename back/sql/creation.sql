DROP TABLE IF EXISTS links;
DROP TABLE IF EXISTS users;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS users (
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    email TEXT NOT NULL UNIQUE,
    username TEXT NOT NULL,
    password TEXT NOT NULL
);

CREATE TABLE IF EXIST links (
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    short_url TEXT NOT NULL UNIQUE, 
    origin_url TEXT NOT NULL,
    uses INTEGER DEFAULT 0,
    creation_date DATE, DEFAULT NOW,
    user_id INTEGER, 
    FOREIGN KEY (user_id) REFERENCES users(id)
);
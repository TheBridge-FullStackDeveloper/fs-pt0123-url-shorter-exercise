DROP TABLE IF EXISTS users;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS users (
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    email TEXT NOT NULL UNIQUE,
    username TEXT NOT NULL,
    password TEXT NOT NULL
);
CREATE TABLE IF NOT EXISTS Links (
     id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    short_url TEXT NOT NULL UNIQUE,
    origin_url TEXT NOT NULL,
    uses_by_creator INT DEFAULT 0,
    uses INT DEFAULT 0,
    creation_date DATE DEFAULT CURRENT_DATE,
    created_by UUID REFERENCES Users(id) ON DELETE CASCADE ON UPDATE CASCADE
)


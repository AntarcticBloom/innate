import postgres from 'postgres'
import { ENV } from '../../utils'
import { stdout } from '../../utils/cli/debug'

await stdout('🌱 Seeding Authors/Books example v1.0.0 (Many:Many book:author)')

const sql = postgres(ENV.DATABASE_URL)
await sql.unsafe(/* sql */ `

CREATE SCHEMA IF NOT EXISTS "books";
SET search_path TO "books";

CREATE TABLE IF NOT EXISTS author(
	id UUID PRIMARY KEY DEFAULT "innate".uuid_generate_v4(),
	name TEXT NOT NULL UNIQUE,
	created_at TIMESTAMP NOT NULL DEFAULT NOW(), 
	updated_at TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS book(
	id UUID PRIMARY KEY DEFAULT "innate".uuid_generate_v4(),
	name TEXT NOT NULL UNIQUE,
	created_at TIMESTAMP NOT NULL DEFAULT NOW(), 
	updated_at TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS book_author(
	book_id UUID REFERENCES book(id),
	author_id UUID REFERENCES author(id),
	CONSTRAINT book_author_pkey PRIMARY KEY (book_id, author_id)
);
`)

process.exit(0)

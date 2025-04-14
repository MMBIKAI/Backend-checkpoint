# Backend Checkpoint

A backend application to showcase development skills.

## Features

- GraphQL
- Database integration
- Creation of entity and resolver
- Test in Apollo server

## Tech Stack

- Node.js
- Apollo client
- Sqlite3
- GraphQL
- TypeORM

## Install dependencies

```bash
npm install
```

## Run the development server

Uses ts-node-dev for auto-restart on file changes.

```bash
npm start
```

## Database

- SQLite is used for simplicity and ease of setup.
- Database is automatically created using TypeORM with entities.

## Available GraphQL Operations

1. Mutation: Add a country  
2. Query: Get all countries  
3. Query: Get country by code  
4. Query: Get countries by continent  
5. Mutation: Modify country  
6. Mutation: Delete country by code

## Emoji

Using website called Emojipedia to get the country's emojis.  
Here is the link: [https://emojipedia.org/](https://emojipedia.org/)

## For Database table changes (adding a column)

- First I used `DROP TABLE`
- Second I used `ALTER TABLE` to avoid data loss

# innate
A database-driven CMS and GraphQL API generator for the Bun runtime and React Native.

## Features

### Roadmap
- [ ] Existing Database Introspection
    > Already have a database? Give innate a PostgreSQL server address and it'll give you a GraphQL API to consume your data and a React Native admin panel
- [ ] Database creation
    > Don't have a database yet? No worries. `innate` will create a PostgreSQL database for you with sensible defaults
- [ ] Default table creation
    > For empty databases, `innate` will create tables with authentication, and role-based access control built-in; for existing databases, it will supplement your schema with role-based access control and authentication fields
- [ ] Expo Admin Panel
    > Easily manage structure and content from the comfort of a native app or the web. 
- [ ] Built-in API versioning and field symlinking:
   > Production environment schema changes allow you to migrate existing content to new locations in your information architecture, deprecating fields and tables as necessary without breaking consuming applications. `@innate/client` can inform you of your downstream deprecated usage, so that you can make an informed decision of when to delete deprecated fields / tables.
- [ ] Eject `innate`
   > Decide that `innate` isn't for you? Easily eject `innate_`-prefixed tables and fields from your database.

### Contributing
To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
```

This project was created using `bun init` in bun v1.0.6. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.

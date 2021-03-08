# Yeet

Build React on Rails applications rapidly with a single command.

## Stack

This bootstrap is very opinionated. You can always swap out anything here (it's just Rails, after all), but generally the intention is to be able to start working on your own application logic right away. The stack includes:

- Rails
- React
- InertiaJS
- PostgreSQL
- TypeScript

## Features

What does Yeet give you?

- Get up and running fast! Run a single command and you're ready to go.
- Build rich, stateful client features without slowing down. Leverage React without giving up the speed Rails provides.
- Build on Rails MVC patterns with well-tested additions design patterns
- Use extended versions of Rails' generators that support React.
- Write tests in RSpec and Jest with zero configuration, including factories on both frontend and backend.
- Enjoy type-safe client code with TypeScript.
- Quickly style your components with Tailwind, no CSS files required.
- Don't stop to setup a database: PostgreSQL is ready to go out of the box.

## Getting Started

Clone the repository.

## Roadmap

### Up Next

- [ ] Page generator
- [ ] Auth with Devise
- [ ] Component generator
- [ ] Component scaffolding CRUD generator
- [ ] GitHub actions YML
- [ ] script/setup based on fresh clone

### Coming Soon After

- [ ] ESLint and configs
- [ ] Model types generator
- [ ] Helmet
- [ ] Domain architecture
- [ ] Ruby auto-formatter
- [ ] Switch from Webpack to ESBuild
- [ ] Model type defs from schema to TS interface
- [ ] Setup reek

## Testing

Note that routes have to be manually generated for Jest specs. When you change
or add routes, run `rake js:routes` to update the routes.js file used for
mocking routes during tests.

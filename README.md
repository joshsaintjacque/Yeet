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
- Build on Rails MVC patterns with well-tested additions design patterns.
- Use extended versions of Rails' generators that support React.
- Write tests in RSpec and Jest with zero configuration, including factories on both frontend and backend.
- Enjoy type-safe client code with TypeScript.
- Quickly style your components with Tailwind, no CSS files required.
- Don't stop to setup a database: PostgreSQL is ready to go out of the box.
- Built in authentication with Devise.
- A working CI from the first push with a GitHub Actions workflow included.

## Getting Started

Clone the repository:

```bash
git clone git@github.com:joshsaintjacque/Yeet.git your-project-name
cd your-project-name
```

Create your PostgreSQL database user:

```bash
createuser -U postgres -e -P -d your-db-username
```

You'll be prompted to enter a password for this user as well.

Run `rails credentials:edit` and enter add your application name, username, and password. Your app name will be used to create databases for each environment (my-app_development, my-app_test, etc.)

```bash
database:
    name: your-app-name
    username: your-db-username
    password: your-db-password
```

Save the generated master key file somewhere you and your team can access it.

Next, run `bin/setup` to install dependencies and setup the database.

Now run `rails s` and `bin/webpack-dev-server` to get your local environment running.

Your server is now running on `http://localhost:3000/`. Visit `http://localhost:3000/notes` to see an example CRUD interface behind a login wall.

## Roadmap

### Up Next

- [ ] Page generator
- [ ] Component generator
- [ ] Component scaffolding CRUD generator
- [ ] Script/setup based on fresh clone
- [ ] Add authentication tests (user model, main layout, controller, etc.)

### Coming Soon After

- [ ] ESLint and configs
- [ ] Standard rb
- [ ] Model types generator
- [ ] Helmet
- [ ] Domain architecture
- [ ] Ruby auto-formatter
- [ ] Switch from Webpack to ESBuild
- [ ] Model type defs from schema to TS interface
- [ ] Setup reek
- [ ] Sort imports

## Testing

Note that routes have to be manually generated for Jest specs. When you change
or add routes, run `rake js:routes` to update the routes.js file used for
mocking routes during tests.

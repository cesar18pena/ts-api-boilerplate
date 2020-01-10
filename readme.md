
<h1 align="center">Typescript Boilerplate for API's development</h1>

| Technology | Status |
| ----------- | ----------- |
| TravisCI | [![Build Status](https://travis-ci.org/cesar18pena/ts-api-boilerplate.svg?branch=master)](https://travis-ci.org/cesar18pena/ts-api-boilerplate) |
| Coveralls | [![Coverage Status](https://coveralls.io/repos/github/cesar18pena/ts-api-boilerplate/badge.svg?branch=master)](https://coveralls.io/github/cesar18pena/ts-api-boilerplate?branch=master)|
 
## Technologies 

- [Node.js](https://nodejs.org/en/)
- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Jest](https://jestjs.io/)
- [TravisCI](https://travis-ci.org/)
- [CircleCI](https://circleci.com/)
- [Docker](https://www.docker.com/)

## Folder Structure

```bash
ts-api-boilerplate
├── .circleci/config.yml          # CircleCI configuration file
├── src/                          # Source directory
|   ├── config/                   # Configuration files
|   └── index.js                  # Initialize server and handle routes and services
├── tests/                        
|   ├── unit/                     # Unit Tests
└── tests/                         
└── .dockerignore                 # Files ignored by docker
└── .eslintrc.js                  # Eslint rules configurations
└── .gitignore                    # Files ignored by git
└── .huskyrc                      # Husky rules configurations for "pre-commit" and "pre-push"
└── .lintstagedrc                 # LintStaged rules configurations
└── .prettierrc                   # Prettier rules configurations
└── .travis.yml                   # Travis CI configuration file
└── .docker-compose.yml           # File defining services, networks and volumes for docker containers
└── Dockerfile                    # File that contains the commands needed to assemble an image for production
└── Dockerfile.dev                # File that contains the commands needed to assemble an image for development
└── jest.config.js                # Jest configurations for testing
└── package.json                  # All dependencies and script to run the application
└── README.md                     # README file
└── tsconfig.json                 # Typescript rules configurations
```

## Minimum setup needed to run the project

### Docker

You need to have docker installed to run this project. If you don't have it installed you can follow [this guide](https://docs.docker.com/install/).

- First clone this repository.
- After that open your terminal of preference and navigate to the directory you cloned this project.
- Type the command `docker-compose up`
- After docker downloads all the images needed, you'll be able to go `http:0.0.0.0:3000/` and see a `hello world` message.

---

### Scripts used on the project

- `npm run build`: Generate the build for the production code (converting Typescript files to Javascript)
- `npm run lint`: Check the code based on `eslint` rules
- `npm run lint:quiet`: Check the code based on `eslint` rules without printing errors in the console
- `npm run prettier:check`: Check the code based on `prettier` rules and print the difference without formatting the code
- `npm run prettier:write`: Same as command 'prettier:check' but this one does format the code
- `npm run start`: Starts the application in production mode
- `npm run start:dev`: Starts the application in development mode
- `npm run test`: Run all tests
- `npm run test:coverage`: Run all tests and generate the coverage file
- `npm run test:watch`: Run all tests everytime a file has changed

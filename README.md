# Node boiler

This project is a custom Node.js framework that follows the Model-Controller-Service-Repository (MCSR) pattern. The structure of the project is designed to promote clean, maintainable, and scalable code by separating different concerns into distinct layers.

---

## Installation

To get started with this project, clone the repository and install the required dependencies:

```bash
git clone git@github.com:nodtech/node-boiler.git
cd node-boiler
npm install
```

## Usage

Start the application using the following command:

```bash
npm start
```

### Environment Variables

Ensure that you have set up the required environment variables in a `.env` file in the root directory. Refer to the `config/` directory for more information on configuration settings.

## Folder Descriptions

### `config/`
Contains configuration files for the application, including database and environment settings.

### `controllers/`
Holds the controller files that manage incoming HTTP requests, interact with services, and send responses back to the client.

### `helpers/`
Utility functions and classes that assist in common tasks across the application are stored here.

### `middlewares/`
Custom middleware functions for request processing, such as authentication, authorization, and logging, are placed here.

### `migrations/`
Database migration files that help in versioning and managing database schema changes are stored in this directory.

### `models/`
Defines the data structures and schemas used by the application to interact with the database.

### `repositories/`
Handles data access and encapsulates database queries, providing an abstraction layer over the models.

### `routes/`
Defines the application's routes and maps them to the appropriate controller actions.

### `seeders/`
Files for populating the database with initial data or test data are placed here.

### `services/`
Contains the business logic of the application, interacting with models and repositories to process data.

### `validators/`
Schema validators and validation logic for incoming request data are located here, ensuring data integrity and correctness.

## Features

- **Node.js**: Built with Node.js version 20.
- **PostgreSQL**: Uses PostgreSQL as the database.
- **Docker**: Containerized setup for easy deployment.
- **Environment Configuration**: Easily configurable via an `.env` file.

## Prerequisites

Before you start, make sure you have the following installed:

- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/)

## Getting Started

1. **Clone the Repository**

   ```bash
   git clone git@github.com:nodtech/node-boiler.git
   cd node-boiler

2. **Start the application with docker**

   ```bash
   docker-compose up
   
2. **To see the Available APIs hit this url in browser**

   [http://localhost:3000/api-docs/#/](http://localhost:3000/api-docs/#/)
   

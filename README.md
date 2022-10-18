<p align="center">
A lightweight API for managing partners 🤝
</p>

## Installation

```bash
$ npm install # yarn
```

## Copy .env.example to .env

```bash
$ cp .env.example to .env
```

## Running the app

```bash
# development watch mode
$ npm run start:dev # yarn start:dev
```

## Running with Docker

```bash
$ docker-compose -f docker-compose.yml up
```

## Resources

### Partners

| Endpoint                | HTTP Method |     Description      |
| ----------------------- | :---------: | :------------------: |
| `/api/v1/partners`      |    `GET`    | `List all partners`  |
| `/api/v1/partners/{id}` |    `GET`    | `Create new partner` |
| `/api/v1/partners`      |   `POST`    | `List partner by ID` |

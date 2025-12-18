# Nest App (port 3001)

Tiny NestJS application with Swagger support running on port 3001.

Quick start:

```bash
cd nest-app-3001
pnpm install
pnpm start:dev
```

Swagger docs: http://localhost:3001/api

RabbitMQ
-------

This project includes a simple RabbitMQ client registered via `ClientsModule` and a `POST /publish` endpoint to emit messages.

- Configure RabbitMQ with environment variables (optional): `RABBITMQ_URL` (default `amqp://localhost:5672`) and `RABBITMQ_QUEUE` (default `main_queue`).
- Start the app:

```bash
pnpm install
pnpm run start:dev
```

- Publish a message:

```bash
curl -X POST http://localhost:3001/publish \
	-H 'Content-Type: application/json' \
	-d '{"pattern":"test","message":{"hello":"world"}}'
```

Make sure a RabbitMQ server is running and reachable at `RABBITMQ_URL`.

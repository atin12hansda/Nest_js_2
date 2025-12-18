# nest-app

Minimal NestJS app scaffolded with pnpm.

Quick start:

Install dependencies:

```bash
pnpm install
```

Run in development mode:

```bash
pnpm run start:dev
```

Build and run production:

```bash
pnpm run build
pnpm run start:prod
```

Then open http://localhost:3000 which returns "Hello World!".

Swagger UI is available at http://localhost:3000/docs after starting the server.

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
curl -X POST http://localhost:3000/publish \
	-H 'Content-Type: application/json' \
	-d '{"pattern":"test","message":{"hello":"world"}}'
```

Make sure a RabbitMQ server is running and reachable at `RABBITMQ_URL`.

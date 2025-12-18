# nest-app-kafka

Small NestJS app demonstrating Kafka producer and consumer using `@nestjs/microservices`.

Quick start

1. Start Kafka (using Docker Compose):

```bash
docker compose up -d
```

2. Install deps and run:

```bash
pnpm install
pnpm start:dev
```

3. Send a test message:

```bash
curl -X POST http://localhost:3002/send -H "Content-Type: application/json" -d '{"value":{"hello":"world"}}'
```

Logs from the Nest app will show consumed messages.

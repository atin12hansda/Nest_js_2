"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    // Swagger setup at /api
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Nest App 3001')
        .setDescription('API docs for Nest app running on port 3001')
        .setVersion('1.0')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, document);
    await app.listen(3001);
    console.log('Listening on http://localhost:3001');
    console.log('Swagger UI available at http://localhost:3001/api');
}
bootstrap();
//# sourceMappingURL=main.js.map
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const configApp = await NestFactory.create(AppModule);
  let configService = configApp.get(ConfigService);  

  const microserviceOptions: MicroserviceOptions = {
    transport: Transport.KAFKA,
    options: {
      client: {
        brokers: configService.get<string[]>('kafkaBrokers'),
      },
    },
  };

  const app = await NestFactory.createMicroservice<MicroserviceOptions>(  
    AppModule,
    microserviceOptions
  );
  await app.listen();
}
bootstrap();

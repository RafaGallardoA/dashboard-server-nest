import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const configApp = await NestFactory.create(AppModule);
  let configService = configApp.get(ConfigService);

  const app = await NestFactory.createMicroservice<MicroserviceOptions>(  
    AppModule,
    {
      transport: Transport.KAFKA,
      options: {
        client: {          
          brokers: [configService.get('kafka_broker')],                    
        },
      },
    },
  );
  await app.listen();
}
bootstrap();

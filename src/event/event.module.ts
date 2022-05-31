import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { EventService } from './event.service';
import configuration from '../config/configuration';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    ClientsModule.registerAsync([
      {
        name: 'ORDER_SERVICE',
        useFactory: (configService: ConfigService) => {          
          return {
            transport: Transport.KAFKA,
            options: {
              client: {
                clientId: 'order',
                brokers: configService.get<string[]>('kafkaBrokers'),
              },
              consumer: {
                groupId: 'order-consumer',
              },
            },
          };
        },
        inject: [ConfigService],
      },
    ]),
  ],
  providers: [EventService],
  exports: [EventService],
})
export class EventModule {}

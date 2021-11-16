import { DefaultResolver } from './default-resolvers/default-resolvers.resolver';
import { logger, LoggerMiddleware } from './middleware/logger.middleware';
import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ParkingSlotsModule } from './parking-slots/parking-slots.module';
import { ParkingRecordsModule } from './parking-records/parking-records.module';
import { ParkingLotsModule } from './parking-lots/parking-lots.module';
import config from './config';

@Module({
  imports: [
    DefaultResolver,
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      playground: true,
      subscriptions: {
        'graphql-ws': true,
      },
    }),
    MongooseModule.forRoot(config.MONGODB_URI, {}),
    UsersModule,
    AuthModule,
    ParkingSlotsModule,
    ParkingRecordsModule,
    ParkingLotsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(logger)
      .forRoutes({ path: 'cats', method: RequestMethod.GET });
  }
}

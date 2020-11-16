import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { RestaurantModule } from './restaurant/restaurant.module';


@Module({
  imports: [
    GraphQLModule.forRoot({ 
      autoSchemaFile: true,
  }),
    RestaurantModule,
   ],
  controllers: [],
  providers: [],
})
export class AppModule {}

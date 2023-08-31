import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { CarsModule } from './cars/cars.module';

@Module({
  imports: [UsersModule, AuthModule, CarsModule],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { configService } from './config/config.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './entities/user/user.module';

@Module({
  imports: [ConfigModule.forRoot(), 
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()), 
    UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

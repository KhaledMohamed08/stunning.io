import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SectionsModule } from './sections/sections.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://khaledmohamed0796:0go9XNf78FUXTBWq@cluster0.e3lvkvl.mongodb.net/stunning-db?retryWrites=true&w=majority&appName=Cluster0'),
    SectionsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

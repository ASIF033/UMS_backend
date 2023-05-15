import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { AdminModule } from './Administrator/app.AdminModule';
//import { CourseFormModule } from './Administrator/CourseFormModule';
import { FacultyModule } from './Faculty/app.FacultyModule';
import { StudentModule } from './Student/app.StudentModule';
import { LibrarianModule } from './Librarian/app.LibrarianModule';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';


@Module({
  imports: [AdminModule, FacultyModule, StudentModule,/*CourseFormModule,*/ LibrarianModule, TypeOrmModule.forRoot(
    { type: 'postgres',
     host: 'localhost',
     port: 5432,
     username: 'postgres',
     password: 'rockingboyy',
     database: 'ums',
     autoLoadEntities: true,
     synchronize: true,
   }
   ),ServeStaticModule.forRoot({
    rootPath: join(__dirname, '..', '../public'), // added ../ to get one folder back
    serveRoot: '/public/' //last slash was important
  }),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

/*
@Module({
  imports: [AdminModule, ManagerModule, TypeOrmModule.forRoot(
   { type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'root',
    database: 'abc_ecommerce',
    autoLoadEntities: true,
    synchronize: true,
  }
  ),],
  controllers: [],
  providers: [],
})
export class AppModule {}
*/

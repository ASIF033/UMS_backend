import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { AdminModule } from './Administrator/app.AdminModule';
import { FacultyModule } from './Faculty/app.FacultyModule';
import { StudentModule } from './Student/app.StudentModule';
import { LibrarianModule } from './Librarian/app.LibrarianModule';



@Module({
  imports: [AdminModule, FacultyModule, StudentModule, LibrarianModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

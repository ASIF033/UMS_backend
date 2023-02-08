import { Module } from '@nestjs/common';
import { FacultyController } from './app.FacultyController';
import { FacultyService } from './app.FacultyService';
@Module({
  controllers: [FacultyController],
  providers: [FacultyService]
})
export class FacultyModule {}
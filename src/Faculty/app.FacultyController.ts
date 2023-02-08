import { Controller, Get, Param, Post, Body, Query, Delete } from '@nestjs/common';
import { FacultyService } from './app.FacultyService';
import { CreateFacultyDTO } from './app.FacultyForm.dto';

@Controller('faculty')
export class FacultyController {
    constructor(private facultysService: FacultyService) { }

    @Get()
    async getFacultys() {
        const facultys = await this.facultysService.getFacultys();
        return facultys;
    }

    @Get(':facultyID')
    async getFaculty(@Param('facultyID') facultyID) {
        const faculty = await this.facultysService.getFaculty(facultyID);
        return faculty;
    }

    @Post('/insertf')
    async addFaculty(@Body() createFacultyDTO: CreateFacultyDTO) {
        const faculty = await this.facultysService.addFaculty(createFacultyDTO);
        return faculty;
    }

    @Delete('/deletef')
    async deleteFaculty(@Query() query) {
        const facultys = await this.facultysService.deleteFaculty(query.facultyID);
        return facultys;
    }
}
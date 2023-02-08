
import { Injectable, HttpException } from '@nestjs/common';
import { Faculty } from './app.FacultyInfo';

  @Injectable()
  export class FacultyService {
      facultys = Faculty;

      getFacultys(): Promise<any> {
          return new Promise(resolve => {
              resolve(this.facultys);
          });
      }
      getFaculty(facultyID): Promise<any> {
          let id = Number(facultyID);
          return new Promise(resolve => {
              const faculty = this.facultys.find(faculty => faculty.facultyID === id);
              if (!faculty) {
                  throw new HttpException('Faculty does not exist!', 404);
              }
              resolve(faculty);
          });
      }
   
      addFaculty(faculty): Promise<any> {
        return new Promise(resolve => {
            this.facultys.push(faculty);
            resolve(this.facultys);
        });
    }

    deleteFaculty(facultyID): Promise<any> {
        let id = Number(facultyID);
        return new Promise(resolve => {
            let index = this.facultys.findIndex(faculty => faculty.facultyID === id);
            if (index === -1) {
                throw new HttpException('Faculty does not exist!', 404);
            }
            this.facultys.splice(1, index);
            resolve(this.facultys);
        });
  }
}
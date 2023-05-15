
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
//import { CourseFormEntity } from "./CourseForm.entity";

@Entity("admin")
export class AdminEntity{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  filename: string;

 /* @OneToMany(() => CourseFormEntity, (course) => course.admin)
  courses: CourseFormEntity[]

*/
}
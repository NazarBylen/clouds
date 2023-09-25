import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  RelationId,
  JoinColumn,
} from 'typeorm';
import { University } from './university.entity';
import { Speciality } from './speciality.entity';

@Entity()
export class Faculty {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text' })
  name: string;

  @ManyToOne(() => University)
  university: University;

  @RelationId((faculty: Faculty) => faculty.university)
  university_id: number;

  @Column()
  speciality_code: string;

  @ManyToOne(() => Speciality)
  @JoinColumn({
    name: 'speciality_code',
    referencedColumnName: 'code',
  })
  speciality: Speciality;

  @Column({ type: 'text', nullable: true })
  short_description: string;

  @Column({ type: 'text', nullable: true })
  url: string;
}

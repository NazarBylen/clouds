import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  RelationId,
} from 'typeorm';
import { Speciality } from './speciality.entity';
import { Subject } from './subject.entity';

export enum subjectStatus {
  Main = 'main',
  MANDATORY = 'mandatory',
  OPTIONAL = 'optional',
}

@Entity()
export class SpecialitySubject {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  speciality_code: string;

  @ManyToOne(() => Speciality)
  @JoinColumn({
    name: 'speciality_code',
    referencedColumnName: 'code',
  })
  speciality: Speciality;

  @ManyToOne(() => Subject)
  subject: Subject;

  @RelationId(
    (specialitySubject: SpecialitySubject) => specialitySubject.subject,
  )
  subject_id: number;

  @Column({
    type: 'enum',
    enum: subjectStatus,
  })
  subject_status: subjectStatus;
}

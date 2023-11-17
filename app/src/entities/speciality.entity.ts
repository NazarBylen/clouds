import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Speciality {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 45, unique: true })
  code: string;

  @Column({ type: 'text' })
  name: string;

  @Column({ default: 0 })
  parent: number;
}

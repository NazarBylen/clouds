import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  RelationId,
} from 'typeorm';

import { City } from './city.entity';

@Entity()
export class University {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => City)
  city: City;

  @RelationId((university: University) => university.city)
  city_id: number;
}

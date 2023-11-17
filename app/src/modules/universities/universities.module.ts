import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { University } from '../../entities/university.entity';
import { UniversitiesController } from './universities.controller';
import { UniversitiesService } from './universities.service';

@Module({
  imports: [TypeOrmModule.forFeature([University])],
  controllers: [UniversitiesController],
  providers: [UniversitiesService],
})
export class UniversitiesModule {}

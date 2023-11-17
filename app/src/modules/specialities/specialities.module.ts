import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Speciality } from '../../entities/speciality.entity';
import { SpecialitiesController } from './specialities.controller';
import { SpecialitiesService } from './specialities.service';

@Module({
  imports: [TypeOrmModule.forFeature([Speciality])],
  controllers: [SpecialitiesController],
  providers: [SpecialitiesService],
})
export class SpecialitiesModule {}

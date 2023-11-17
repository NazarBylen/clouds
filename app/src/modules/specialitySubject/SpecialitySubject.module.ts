import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { SpecialitySubjectController } from './SpecialitySubject.controller';
import { SpecialitySubjectService } from './SpecialitySubject.service';
import { SpecialitySubject } from '../../entities/specialitySubject.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SpecialitySubject])],
  controllers: [SpecialitySubjectController],
  providers: [SpecialitySubjectService],
})
export class SpecialitySubjectsModule {}

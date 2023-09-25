import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TestModule } from './test/test.module';
import { CitiesModule } from './cities/cities.module';
import { UniversitiesModule } from './universities/universities.module';
import { SpecialitiesModule } from './specialities/specialities.module';
import { FacultiesModule } from './faculties/faculties.module';
import { SubjectsModule } from './subjects/subjects.module';
import { SpecialitySubjectsModule } from './specialitySubject/SpecialitySubject.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env.development.local', '.env'],
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DATABASE_HOST,
      port: Number(process.env.DATABASE_PORT),
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      // entities: [],
      autoLoadEntities: true,
      synchronize: true,
    }),
    TestModule,
    CitiesModule,
    UniversitiesModule,
    SpecialitiesModule,
    FacultiesModule,
    SubjectsModule,
    SpecialitySubjectsModule,
  ],
})
export class AppModule {}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Test } from '../../entities/test.entity';
import { TestDto } from './dto/test.dto';

@Injectable()
export class TestService {
  constructor(
    @InjectRepository(Test)
    private testRepository: Repository<Test>,
  ) {}
  list = [
    {
      id: 1,
      name: 'tset1',
    },
    {
      id: 2,
      name: 'test2',
    },
  ];

  getList(): TestDto[] {
    return this.list;
  }
}

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
  async getHello(): Promise<TestDto[]> {
    return this.testRepository.find();
  }
}

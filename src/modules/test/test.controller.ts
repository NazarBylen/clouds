import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';

import { TestService } from './test.service';
import { TestDto } from './dto/test.dto';

@Controller('test')
export class TestController {
  constructor(private readonly testService: TestService) {}

  @ApiOkResponse({
    type: TestDto,
    description: 'List of tests',
  })
  @Get('/')
  getTest() {
    return this.testService.getList();
  }
}

import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiBody, ApiOkResponse, ApiParam, ApiTags } from '@nestjs/swagger';

import { SubjectsService } from './subjects.service';
import { SubjectDto } from './dto/subject.dto';
import { UpdateSubjectBodyDto } from './dto/updateSubjectBody.dto';

@ApiTags('Subjects')
@Controller('subjects')
export class SubjectsController {
  constructor(private readonly subjectsService: SubjectsService) {}

  @ApiOkResponse({
    isArray: true,
    type: SubjectDto,
    description: 'List of Subjects',
  })
  @Get('/')
  async getSubjects() {
    return this.subjectsService.getSubjects();
  }

  @ApiParam({ name: 'subjectId', type: String })
  @ApiOkResponse({
    type: SubjectDto,
    description: 'Subject',
  })
  @Get('/:subjectId')
  async getSubject(@Param() { subjectId }) {
    return this.subjectsService.getSubject(subjectId);
  }

  @ApiOkResponse({
    description: 'Delete subject',
    status: 204,
  })
  @ApiParam({ name: 'subjectId', type: String })
  @Delete('/:subjectId')
  @HttpCode(204)
  async deleteSubject(@Param() { subjectId }) {
    return this.subjectsService.deleteSubject(subjectId);
  }

  @ApiOkResponse({
    type: SubjectDto,
    description: 'Update subject',
  })
  @ApiParam({ name: 'subjectId', type: String })
  @ApiBody({ type: UpdateSubjectBodyDto, required: true })
  @Patch('/:subjectId')
  async updateSubject(
    @Param() { subjectId },
    @Body() subject: UpdateSubjectBodyDto,
  ) {
    return this.subjectsService.updateSubject(subjectId, subject);
  }

  @ApiBody({ type: UpdateSubjectBodyDto, required: true })
  @ApiOkResponse({ type: UpdateSubjectBodyDto })
  @Post('/')
  async createSubject(@Body() subject: UpdateSubjectBodyDto) {
    return this.subjectsService.createSubject(subject);
  }
}

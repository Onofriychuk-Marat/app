import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Query,
  Headers,
} from '@nestjs/common';
import { AppService } from './app.service';
import { IssueDto } from './dto/issue.dto';
import { Iissue } from './interfaces/issue.interface';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/help')
  help(): Promise<string> {
    return this.appService.getHelp();
  }

  @Get(':organization/:repository/issues?')
  get(
    @Param('organization') organization,
    @Param('repository') repository,
    @Query('filter') filter: string,
    @Query('sort') sort: string,
  ): Promise<Iissue[]> {
    return this.appService.get(organization, repository, filter, sort);
  }

  @Get(':organization/:repository/issues/:id')
  show(
    @Param('organization') organization,
    @Param('repository') repository: string,
    @Param('id') id: number,
  ): Promise<Iissue> {
    return this.appService.show(organization, repository, id);
  }

  @Post(':organization/:repository/issues')
  create(
    @Param('organization') organization,
    @Param('repository') repository: string,
    @Body() newIssue: IssueDto,
    @Headers('Authorization') token: string,
  ): Promise<Iissue> {
    return this.appService.create(organization, repository, newIssue, token);
  }

  @Patch(':organization/:repository/issues/:id')
  edit(
    @Param('organization') organization,
    @Param('repository') repository: string,
    @Body() updatedIssue: IssueDto,
    @Headers('Authorization') token: string,
    @Param('id') id: number,
  ): Promise<Iissue> {
    return this.appService.edit(
      organization,
      repository,
      id,
      updatedIssue,
      token,
    );
  }
}

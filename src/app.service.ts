import { HttpService, Injectable } from '@nestjs/common';
import { IssueDto } from './dto/issue.dto';
import { Iissue } from './interfaces/issue.interface';
import * as fs from 'fs/promises';

@Injectable()
export class AppService {
  constructor(private readonly httpService: HttpService) {}

  url({
    organization,
    repository,
    id,
    filter,
    sort,
  }: {
    organization: string;
    repository: string;
    id?: number;
    filter?: string;
    sort?: string;
  }) {
    let link = `https://api.github.com/repos/${organization}/${repository}/issues`;
    if (id) {
      link += `/${id}`;
    }
    return `${link}?filter=${filter}&sort=${sort}`;
  }

  getHelp(): Promise<string> {
    return this.readFile('README.md');
  }

  async readFile(file: string): Promise<string> {
    try {
      const link = process.env.PWD + '/' + file;
      return fs.readFile(link, {
        encoding: 'utf8',
      });
    } catch (error) {
      return 'empty';
    }
  }

  async get(
    organization: string,
    repository: string,
    filter: string,
    sort: string,
  ): Promise<Iissue[]> {
    const link = this.url({ organization, repository, filter, sort });
    return (await this.httpService.get<Iissue[]>(link).toPromise()).data;
  }

  async show(
    organization: string,
    repository: string,
    id: number,
  ): Promise<Iissue> {
    const link = this.url({ organization, repository, id });
    return (await this.httpService.get<Iissue>(link).toPromise()).data;
  }

  async create(
    organization: string,
    repository: string,
    newIssue: IssueDto,
    token: string,
  ): Promise<Iissue> {
    const link = this.url({ organization, repository });
    const headers = { Authorization: `${token}` };
    return (
      await this.httpService
        .post<Iissue>(link, newIssue, { headers })
        .toPromise()
    ).data;
  }

  async edit(
    organization: string,
    repository: string,
    id: number,
    updatedIssue: IssueDto,
    token: string,
  ): Promise<Iissue> {
    const link = this.url({ organization, repository, id });
    const headers = { Authorization: `${token}` };
    return (
      await this.httpService
        .post<Iissue>(link, updatedIssue, { headers })
        .toPromise()
    ).data;
  }
}

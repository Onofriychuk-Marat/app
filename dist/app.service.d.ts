import { HttpService } from '@nestjs/common';
import { IssueDto } from './dto/issue.dto';
import { Iissue } from './interfaces/issue.interface';
export declare class AppService {
    private readonly httpService;
    constructor(httpService: HttpService);
    url({ organization, repository, id, filter, sort, }: {
        organization: string;
        repository: string;
        id?: number;
        filter?: string;
        sort?: string;
    }): string;
    getHelp(): Promise<string>;
    readFile(file: string): Promise<string>;
    get(organization: string, repository: string, filter: string, sort: string): Promise<Iissue[]>;
    show(organization: string, repository: string, id: number): Promise<Iissue>;
    create(organization: string, repository: string, newIssue: IssueDto, token: string): Promise<Iissue>;
    edit(organization: string, repository: string, id: number, updatedIssue: IssueDto, token: string): Promise<Iissue>;
}

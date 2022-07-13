import { AppService } from './app.service';
import { IssueDto } from './dto/issue.dto';
import { Iissue } from './interfaces/issue.interface';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    help(): Promise<string>;
    get(organization: any, repository: any, filter: string, sort: string): Promise<Iissue[]>;
    show(organization: any, repository: string, id: number): Promise<Iissue>;
    create(organization: any, repository: string, newIssue: IssueDto, token: string): Promise<Iissue>;
    edit(organization: any, repository: string, updatedIssue: IssueDto, token: string, id: number): Promise<Iissue>;
}

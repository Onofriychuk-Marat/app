"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const fs = require("fs/promises");
let AppService = class AppService {
    constructor(httpService) {
        this.httpService = httpService;
    }
    url({ organization, repository, id, filter, sort, }) {
        let link = `https://api.github.com/repos/${organization}/${repository}/issues`;
        if (id) {
            link += `/${id}`;
        }
        return `${link}?filter=${filter}&sort=${sort}`;
    }
    getHelp() {
        return this.readFile('README.md');
    }
    async readFile(file) {
        try {
            console.log('**** ', process.env.PWD, file);
            const link = process.env.PWD + '/' + file;
            console.log('link: ', link);
            return fs.readFile(link, {
                encoding: 'utf8',
            });
        }
        catch (error) {
            return 'empty';
        }
    }
    async get(organization, repository, filter, sort) {
        const link = this.url({ organization, repository, filter, sort });
        return (await this.httpService.get(link).toPromise()).data;
    }
    async show(organization, repository, id) {
        const link = this.url({ organization, repository, id });
        return (await this.httpService.get(link).toPromise()).data;
    }
    async create(organization, repository, newIssue, token) {
        const link = this.url({ organization, repository });
        const headers = { Authorization: `${token}` };
        return (await this.httpService
            .post(link, newIssue, { headers })
            .toPromise()).data;
    }
    async edit(organization, repository, id, updatedIssue, token) {
        const link = this.url({ organization, repository, id });
        const headers = { Authorization: `${token}` };
        return (await this.httpService
            .post(link, updatedIssue, { headers })
            .toPromise()).data;
    }
};
AppService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [common_1.HttpService])
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map
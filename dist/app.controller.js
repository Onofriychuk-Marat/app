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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
const issue_dto_1 = require("./dto/issue.dto");
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    help() {
        return this.appService.getHelp();
    }
    get(organization, repository, filter, sort) {
        return this.appService.get(organization, repository, filter, sort);
    }
    show(organization, repository, id) {
        return this.appService.show(organization, repository, id);
    }
    create(organization, repository, newIssue, token) {
        return this.appService.create(organization, repository, newIssue, token);
    }
    edit(organization, repository, updatedIssue, token, id) {
        return this.appService.edit(organization, repository, id, updatedIssue, token);
    }
};
__decorate([
    (0, common_1.Get)('/help'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppController.prototype, "help", null);
__decorate([
    (0, common_1.Get)(':organization/:repository/issues?'),
    __param(0, (0, common_1.Param)('organization')),
    __param(1, (0, common_1.Param)('repository')),
    __param(2, (0, common_1.Query)('filter')),
    __param(3, (0, common_1.Query)('sort')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, String, String]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "get", null);
__decorate([
    (0, common_1.Get)(':organization/:repository/issues/:id'),
    __param(0, (0, common_1.Param)('organization')),
    __param(1, (0, common_1.Param)('repository')),
    __param(2, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, Number]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "show", null);
__decorate([
    (0, common_1.Post)(':organization/:repository/issues'),
    __param(0, (0, common_1.Param)('organization')),
    __param(1, (0, common_1.Param)('repository')),
    __param(2, (0, common_1.Body)()),
    __param(3, (0, common_1.Headers)('Authorization')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, issue_dto_1.IssueDto, String]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(':organization/:repository/issues/:id'),
    __param(0, (0, common_1.Param)('organization')),
    __param(1, (0, common_1.Param)('repository')),
    __param(2, (0, common_1.Body)()),
    __param(3, (0, common_1.Headers)('Authorization')),
    __param(4, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, issue_dto_1.IssueDto, String, Number]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "edit", null);
AppController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [app_service_1.AppService])
], AppController);
exports.AppController = AppController;
//# sourceMappingURL=app.controller.js.map
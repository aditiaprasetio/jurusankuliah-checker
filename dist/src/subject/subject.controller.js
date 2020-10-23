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
const common_1 = require("@nestjs/common");
const crud_1 = require("@nestjsx/crud");
const subject_entity_1 = require("./subject.entity");
const swagger_1 = require("@nestjs/swagger");
const subject_service_1 = require("./subject.service");
let SubjectController = class SubjectController {
    constructor(service) {
        this.service = service;
    }
    get base() {
        return this;
    }
};
SubjectController = __decorate([
    crud_1.Crud({
        model: {
            type: subject_entity_1.Subject,
        },
        params: {
            id: {
                field: 'id',
                type: 'string',
                primary: true,
            },
        },
    }),
    swagger_1.ApiTags('Subject'),
    common_1.Controller('subject'),
    swagger_1.ApiBearerAuth(),
    __metadata("design:paramtypes", [subject_service_1.SubjectService])
], SubjectController);
exports.SubjectController = SubjectController;
//# sourceMappingURL=subject.controller.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const detail_controller_1 = require("./detail.controller");
const detail_service_1 = require("./detail.service");
const detail_entity_1 = require("./detail.entity");
let SubjectDetailModule = class SubjectDetailModule {
};
SubjectDetailModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([detail_entity_1.SubjectDetail])],
        providers: [detail_service_1.SubjectDetailService],
        controllers: [detail_controller_1.SubjectDetailController],
    })
], SubjectDetailModule);
exports.SubjectDetailModule = SubjectDetailModule;
//# sourceMappingURL=detail.module.js.map
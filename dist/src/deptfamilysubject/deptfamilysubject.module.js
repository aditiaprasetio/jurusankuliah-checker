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
const deptfamilysubject_controller_1 = require("./deptfamilysubject.controller");
const deptfamilysubject_service_1 = require("./deptfamilysubject.service");
const deptfamilysubject_entity_1 = require("./deptfamilysubject.entity");
let DeptFamilySubjectModule = class DeptFamilySubjectModule {
};
DeptFamilySubjectModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([deptfamilysubject_entity_1.DeptFamilySubject])],
        providers: [deptfamilysubject_service_1.DeptFamilySubjectService],
        controllers: [deptfamilysubject_controller_1.DeptFamilySubjectController],
    })
], DeptFamilySubjectModule);
exports.DeptFamilySubjectModule = DeptFamilySubjectModule;
//# sourceMappingURL=deptfamilysubject.module.js.map
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
const departmentFamily_controller_1 = require("./departmentFamily.controller");
const departmentFamily_service_1 = require("./departmentFamily.service");
const departmentFamily_entity_1 = require("./departmentFamily.entity");
let DepartmentFamilyModule = class DepartmentFamilyModule {
};
DepartmentFamilyModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([departmentFamily_entity_1.DepartmentFamily])],
        providers: [departmentFamily_service_1.DepartmentFamilyService],
        controllers: [departmentFamily_controller_1.DepartmentFamilyController],
    })
], DepartmentFamilyModule);
exports.DepartmentFamilyModule = DepartmentFamilyModule;
//# sourceMappingURL=departmentFamily.module.js.map
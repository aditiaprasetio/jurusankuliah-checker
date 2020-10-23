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
const university_controller_1 = require("./university.controller");
const university_service_1 = require("./university.service");
const university_entity_1 = require("./university.entity");
let UniversityModule = class UniversityModule {
};
UniversityModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([university_entity_1.University])],
        providers: [university_service_1.UniversityService],
        controllers: [university_controller_1.UniversityController],
    })
], UniversityModule);
exports.UniversityModule = UniversityModule;
//# sourceMappingURL=university.module.js.map
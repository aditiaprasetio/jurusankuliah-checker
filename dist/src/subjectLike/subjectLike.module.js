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
const subjectLike_controller_1 = require("./subjectLike.controller");
const subjectLike_service_1 = require("./subjectLike.service");
const subjectLike_entity_1 = require("./subjectLike.entity");
let SubjectLikeModule = class SubjectLikeModule {
};
SubjectLikeModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([subjectLike_entity_1.SubjectLike])],
        providers: [subjectLike_service_1.SubjectLikeService],
        controllers: [subjectLike_controller_1.SubjectLikeController],
    })
], SubjectLikeModule);
exports.SubjectLikeModule = SubjectLikeModule;
//# sourceMappingURL=subjectLike.module.js.map
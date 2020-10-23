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
const typeorm_1 = require("typeorm");
const base_entity_1 = require("../base.entity");
const uuid = require("uuid");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const crud_1 = require("@nestjsx/crud");
const deptfamilysubject_entity_1 = require("../deptfamilysubject/deptfamilysubject.entity");
const class_transformer_1 = require("class-transformer");
const detail_entity_1 = require("./detail/detail.entity");
const { CREATE, UPDATE } = crud_1.CrudValidationGroups;
let Subject = class Subject extends base_entity_1.BaseEntity {
    beforeInsert() {
        if (!this.id) {
            this.id = uuid.v4();
        }
    }
};
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsOptional({ groups: [UPDATE] }),
    class_validator_1.IsNotEmpty({ groups: [CREATE] }),
    typeorm_1.Column({ type: 'varchar', unique: true }),
    __metadata("design:type", String)
], Subject.prototype, "name", void 0);
__decorate([
    swagger_1.ApiPropertyOptional(),
    class_validator_1.IsOptional({ always: true }),
    typeorm_1.Column({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], Subject.prototype, "description", void 0);
__decorate([
    swagger_1.ApiPropertyOptional({
        description: `Available values: [SAINS/SOSIAL/BAHASA]`,
    }),
    class_validator_1.IsOptional({ always: true }),
    typeorm_1.Column({ type: 'varchar', nullable: true }),
    __metadata("design:type", String)
], Subject.prototype, "type", void 0);
__decorate([
    swagger_1.ApiPropertyOptional(),
    class_validator_1.IsOptional({ always: true }),
    typeorm_1.Column({ type: 'varchar', nullable: true }),
    __metadata("design:type", String)
], Subject.prototype, "created_by_id", void 0);
__decorate([
    swagger_1.ApiPropertyOptional(),
    class_validator_1.IsOptional({ always: true }),
    typeorm_1.Column({ type: 'json', nullable: true }),
    __metadata("design:type", Object)
], Subject.prototype, "meta_created_by", void 0);
__decorate([
    typeorm_1.OneToMany(() => detail_entity_1.SubjectDetail, (subject_detail) => subject_detail.subject),
    class_transformer_1.Type(() => detail_entity_1.SubjectDetail),
    __metadata("design:type", Array)
], Subject.prototype, "subject_details", void 0);
__decorate([
    typeorm_1.OneToMany(() => deptfamilysubject_entity_1.DeptFamilySubject, (deptfamilysubject) => deptfamilysubject.subject),
    class_transformer_1.Type(() => deptfamilysubject_entity_1.DeptFamilySubject),
    __metadata("design:type", Array)
], Subject.prototype, "deptfamilysubjects", void 0);
__decorate([
    typeorm_1.BeforeInsert(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Subject.prototype, "beforeInsert", null);
Subject = __decorate([
    typeorm_1.Entity('subjects')
], Subject);
exports.Subject = Subject;
//# sourceMappingURL=subject.entity.js.map
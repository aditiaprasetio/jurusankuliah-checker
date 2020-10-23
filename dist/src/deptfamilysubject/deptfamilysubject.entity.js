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
const departmentFamily_entity_1 = require("../departmentFamily/departmentFamily.entity");
const subject_entity_1 = require("../subject/subject.entity");
const { CREATE, UPDATE } = crud_1.CrudValidationGroups;
let DeptFamilySubject = class DeptFamilySubject extends base_entity_1.BaseEntity {
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
    typeorm_1.Column({ type: 'varchar' }),
    __metadata("design:type", String)
], DeptFamilySubject.prototype, "departmentfamily_id", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsOptional({ groups: [UPDATE] }),
    class_validator_1.IsNotEmpty({ groups: [CREATE] }),
    typeorm_1.Column({ type: 'varchar' }),
    __metadata("design:type", String)
], DeptFamilySubject.prototype, "subject_id", void 0);
__decorate([
    swagger_1.ApiPropertyOptional(),
    class_validator_1.IsOptional({ always: true }),
    typeorm_1.Column({ type: 'float', nullable: true }),
    __metadata("design:type", String)
], DeptFamilySubject.prototype, "important_value", void 0);
__decorate([
    swagger_1.ApiPropertyOptional(),
    class_validator_1.IsOptional({ always: true }),
    typeorm_1.Column({ type: 'varchar', nullable: true }),
    __metadata("design:type", String)
], DeptFamilySubject.prototype, "created_by_id", void 0);
__decorate([
    swagger_1.ApiPropertyOptional(),
    class_validator_1.IsOptional({ always: true }),
    typeorm_1.Column({ type: 'json', nullable: true }),
    __metadata("design:type", Object)
], DeptFamilySubject.prototype, "meta_created_by", void 0);
__decorate([
    typeorm_1.ManyToOne(() => departmentFamily_entity_1.DepartmentFamily, (departmentfamily) => departmentfamily.deptfamily_subjects, {
        cascade: true,
        onDelete: 'CASCADE',
    }),
    typeorm_1.JoinColumn({ name: 'departmentfamily_id' }),
    __metadata("design:type", departmentFamily_entity_1.DepartmentFamily)
], DeptFamilySubject.prototype, "deptfamily", void 0);
__decorate([
    typeorm_1.ManyToOne(() => subject_entity_1.Subject, (subject) => subject.deptfamilysubjects, {
        cascade: true,
        onDelete: 'CASCADE',
    }),
    typeorm_1.JoinColumn({ name: 'subject_id' }),
    __metadata("design:type", subject_entity_1.Subject)
], DeptFamilySubject.prototype, "subject", void 0);
__decorate([
    typeorm_1.BeforeInsert(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DeptFamilySubject.prototype, "beforeInsert", null);
DeptFamilySubject = __decorate([
    typeorm_1.Entity('deptfamily_subjects')
], DeptFamilySubject);
exports.DeptFamilySubject = DeptFamilySubject;
//# sourceMappingURL=deptfamilysubject.entity.js.map
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
const class_transformer_1 = require("class-transformer");
const university_entity_1 = require("../university/university.entity");
const departmentFamily_entity_1 = require("../departmentFamily/departmentFamily.entity");
const profile_entity_1 = require("../profile/profile.entity");
const { CREATE, UPDATE } = crud_1.CrudValidationGroups;
let Department = class Department extends base_entity_1.BaseEntity {
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
], Department.prototype, "name", void 0);
__decorate([
    swagger_1.ApiPropertyOptional(),
    class_validator_1.IsOptional({ always: true }),
    typeorm_1.Column({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], Department.prototype, "description", void 0);
__decorate([
    swagger_1.ApiPropertyOptional({
        description: `Available values: [SAINS/SOSIAL/BAHASA]`,
    }),
    class_validator_1.IsOptional({ always: true }),
    typeorm_1.Column({ type: 'varchar', nullable: true }),
    __metadata("design:type", String)
], Department.prototype, "type", void 0);
__decorate([
    swagger_1.ApiPropertyOptional(),
    class_validator_1.IsOptional({ always: true }),
    typeorm_1.Column({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], Department.prototype, "url", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsOptional({ groups: [UPDATE] }),
    class_validator_1.IsNotEmpty({ groups: [CREATE] }),
    typeorm_1.Column({ type: 'varchar' }),
    __metadata("design:type", String)
], Department.prototype, "university_id", void 0);
__decorate([
    swagger_1.ApiPropertyOptional(),
    class_validator_1.IsOptional({ always: true }),
    typeorm_1.Column({ type: 'varchar', nullable: true }),
    __metadata("design:type", String)
], Department.prototype, "created_by_id", void 0);
__decorate([
    swagger_1.ApiPropertyOptional(),
    class_validator_1.IsOptional({ always: true }),
    typeorm_1.Column({ type: 'varchar', nullable: true }),
    __metadata("design:type", String)
], Department.prototype, "department_family_id", void 0);
__decorate([
    swagger_1.ApiPropertyOptional(),
    class_validator_1.IsOptional({ always: true }),
    typeorm_1.Column({ type: 'json', nullable: true }),
    __metadata("design:type", Object)
], Department.prototype, "meta_created_by", void 0);
__decorate([
    typeorm_1.ManyToOne(() => university_entity_1.University, (university) => university.departments, {
        cascade: true,
        onDelete: 'CASCADE',
    }),
    typeorm_1.JoinColumn({ name: 'university_id' }),
    __metadata("design:type", university_entity_1.University)
], Department.prototype, "university", void 0);
__decorate([
    typeorm_1.ManyToOne(() => departmentFamily_entity_1.DepartmentFamily, (department_family) => department_family.departments, {
        cascade: true,
        onDelete: 'CASCADE',
    }),
    typeorm_1.JoinColumn({ name: 'department_family_id' }),
    __metadata("design:type", departmentFamily_entity_1.DepartmentFamily)
], Department.prototype, "department_family", void 0);
__decorate([
    typeorm_1.OneToMany(() => profile_entity_1.Profile, (profile) => profile.department),
    class_transformer_1.Type(() => profile_entity_1.Profile),
    __metadata("design:type", Array)
], Department.prototype, "profiles", void 0);
__decorate([
    typeorm_1.OneToMany(() => profile_entity_1.Profile, (profile) => profile.want_department),
    class_transformer_1.Type(() => profile_entity_1.Profile),
    __metadata("design:type", Array)
], Department.prototype, "want_profiles", void 0);
__decorate([
    typeorm_1.BeforeInsert(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Department.prototype, "beforeInsert", null);
Department = __decorate([
    typeorm_1.Entity('departments')
], Department);
exports.Department = Department;
//# sourceMappingURL=department.entity.js.map
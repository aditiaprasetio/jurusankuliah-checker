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
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const crud_1 = require("@nestjsx/crud");
const { CREATE, UPDATE } = crud_1.CrudValidationGroups;
const department_entity_1 = require("../department/department.entity");
const class_transformer_1 = require("class-transformer");
const subjectLike_entity_1 = require("../subjectLike/subjectLike.entity");
let Profile = class Profile extends base_entity_1.BaseEntity {
    beforeInsert() {
        this.id = this.account_id;
    }
};
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsOptional({ groups: [UPDATE] }),
    class_validator_1.IsNotEmpty({ groups: [CREATE] }),
    typeorm_1.Column({ type: 'varchar', unique: true }),
    __metadata("design:type", String)
], Profile.prototype, "account_id", void 0);
__decorate([
    swagger_1.ApiPropertyOptional({
        description: `Available values: [LULUS KULIAH, MAHASISWA, PEJUANG KULIAH ]`,
    }),
    class_validator_1.IsOptional({ always: true }),
    typeorm_1.Column({ type: 'varchar', nullable: true }),
    __metadata("design:type", String)
], Profile.prototype, "current_status", void 0);
__decorate([
    swagger_1.ApiPropertyOptional(),
    class_validator_1.IsOptional({ always: true }),
    typeorm_1.Column({ type: 'varchar', nullable: true }),
    __metadata("design:type", String)
], Profile.prototype, "department_id", void 0);
__decorate([
    swagger_1.ApiPropertyOptional(),
    class_validator_1.IsOptional({ always: true }),
    typeorm_1.Column({ type: 'varchar', nullable: true }),
    __metadata("design:type", String)
], Profile.prototype, "want_department_id", void 0);
__decorate([
    typeorm_1.ManyToOne(() => department_entity_1.Department, (department) => department.profiles, {
        cascade: true,
        onDelete: 'CASCADE',
    }),
    typeorm_1.JoinColumn({ name: 'department_id' }),
    __metadata("design:type", department_entity_1.Department)
], Profile.prototype, "department", void 0);
__decorate([
    typeorm_1.ManyToOne(() => department_entity_1.Department, (department) => department.want_profiles, {
        cascade: true,
        onDelete: 'CASCADE',
    }),
    typeorm_1.JoinColumn({ name: 'want_department_id' }),
    __metadata("design:type", department_entity_1.Department)
], Profile.prototype, "want_department", void 0);
__decorate([
    typeorm_1.OneToMany(() => subjectLike_entity_1.SubjectLike, (subjectlike) => subjectlike.profile),
    class_transformer_1.Type(() => subjectLike_entity_1.SubjectLike),
    __metadata("design:type", Array)
], Profile.prototype, "subjectlikes", void 0);
__decorate([
    typeorm_1.BeforeInsert(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Profile.prototype, "beforeInsert", null);
Profile = __decorate([
    typeorm_1.Entity('profiles')
], Profile);
exports.Profile = Profile;
//# sourceMappingURL=profile.entity.js.map
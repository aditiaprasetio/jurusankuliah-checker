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
const subject_entity_1 = require("../subject/subject.entity");
const profile_entity_1 = require("../profile/profile.entity");
const { CREATE, UPDATE } = crud_1.CrudValidationGroups;
let SubjectLike = class SubjectLike extends base_entity_1.BaseEntity {
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
], SubjectLike.prototype, "subject_id", void 0);
__decorate([
    swagger_1.ApiPropertyOptional(),
    class_validator_1.IsOptional({ groups: [UPDATE] }),
    class_validator_1.IsNotEmpty({ groups: [CREATE] }),
    typeorm_1.Column(),
    __metadata("design:type", Number)
], SubjectLike.prototype, "order", void 0);
__decorate([
    swagger_1.ApiPropertyOptional(),
    class_validator_1.IsOptional({ always: true }),
    typeorm_1.Column({ type: 'varchar' }),
    __metadata("design:type", String)
], SubjectLike.prototype, "created_by_id", void 0);
__decorate([
    typeorm_1.ManyToOne(() => profile_entity_1.Profile, (profile) => profile.subjectlikes, {
        cascade: true,
        onDelete: 'CASCADE',
    }),
    typeorm_1.JoinColumn({ name: 'created_by_id' }),
    __metadata("design:type", profile_entity_1.Profile)
], SubjectLike.prototype, "profile", void 0);
__decorate([
    typeorm_1.ManyToOne(() => subject_entity_1.Subject, (subject) => subject.deptfamilysubjects, {
        cascade: true,
        onDelete: 'CASCADE',
    }),
    typeorm_1.JoinColumn({ name: 'subject_id' }),
    __metadata("design:type", subject_entity_1.Subject)
], SubjectLike.prototype, "subject", void 0);
__decorate([
    typeorm_1.BeforeInsert(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SubjectLike.prototype, "beforeInsert", null);
SubjectLike = __decorate([
    typeorm_1.Entity('subject_likes')
], SubjectLike);
exports.SubjectLike = SubjectLike;
//# sourceMappingURL=subjectLike.entity.js.map
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const crud_1 = require("@nestjsx/crud");
const profile_entity_1 = require("./profile.entity");
const swagger_1 = require("@nestjs/swagger");
const profile_service_1 = require("./profile.service");
const auth_1 = require("../utils/auth");
let ProfileController = class ProfileController {
    constructor(service) {
        this.service = service;
    }
    get base() {
        return this;
    }
    getOne(req) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const find = req.parsed.paramsFilter.find((item) => item.field === 'id');
                const id = find.value;
                const isExist = yield this.base.getOneBase(req);
                if (isExist) {
                    return isExist;
                }
                else {
                    return this.service.customCreateOne({ account_id: id });
                }
            }
            catch (err) {
                throw new common_1.HttpException(err.message || err.response, err.status);
            }
        });
    }
    updateOne(req, dto, request) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const find = req.parsed.paramsFilter.find((item) => item.field === 'id');
                const id = find.value;
                if (request.headers.authorization) {
                    const accountId = yield auth_1.getAccountId(request.headers.authorization);
                    return yield this.service.customUpdateOne(id, dto);
                }
                else {
                    throw new common_1.UnauthorizedException();
                }
            }
            catch (err) {
                throw new common_1.HttpException(err.message || err.response, err.status);
            }
        });
    }
};
__decorate([
    crud_1.Override(),
    __param(0, crud_1.ParsedRequest()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProfileController.prototype, "getOne", null);
__decorate([
    crud_1.Override(),
    __param(0, crud_1.ParsedRequest()),
    __param(1, crud_1.ParsedBody()),
    __param(2, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, profile_entity_1.Profile, Object]),
    __metadata("design:returntype", Promise)
], ProfileController.prototype, "updateOne", null);
ProfileController = __decorate([
    crud_1.Crud({
        model: {
            type: profile_entity_1.Profile,
        },
        params: {
            id: {
                field: 'id',
                type: 'string',
                primary: true,
            },
        },
        query: {
            join: {
                department: {
                    eager: true,
                },
                want_department: {
                    eager: true,
                },
                'department.university': {
                    eager: true,
                    alias: 'department_university',
                },
                'want_department.university': {
                    eager: true,
                    alias: 'want_department_university',
                },
                'department.department_family': {
                    eager: true,
                    alias: 'department_family',
                },
                'want_department.department_family': {
                    eager: true,
                    alias: 'want_department_family',
                },
            },
        },
        routes: {
            exclude: [
                'createManyBase',
                'deleteOneBase',
                'getManyBase',
                'replaceOneBase',
            ],
        },
    }),
    swagger_1.ApiTags('Profile'),
    common_1.Controller('profile'),
    swagger_1.ApiBearerAuth(),
    __metadata("design:paramtypes", [profile_service_1.ProfileService])
], ProfileController);
exports.ProfileController = ProfileController;
//# sourceMappingURL=profile.controller.js.map
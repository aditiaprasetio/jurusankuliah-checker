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
const department_entity_1 = require("./department.entity");
const swagger_1 = require("@nestjs/swagger");
const department_service_1 = require("./department.service");
const auth_1 = require("../utils/auth");
let DepartmentController = class DepartmentController {
    constructor(service) {
        this.service = service;
    }
    get base() {
        return this;
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
    __param(1, crud_1.ParsedBody()),
    __param(2, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, department_entity_1.Department, Object]),
    __metadata("design:returntype", Promise)
], DepartmentController.prototype, "updateOne", null);
DepartmentController = __decorate([
    crud_1.Crud({
        model: {
            type: department_entity_1.Department,
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
                university: {
                    eager: true,
                },
                department_family: {
                    eager: true,
                },
            },
        },
    }),
    swagger_1.ApiTags('Department'),
    common_1.Controller('department'),
    swagger_1.ApiBearerAuth(),
    __metadata("design:paramtypes", [department_service_1.DepartmentService])
], DepartmentController);
exports.DepartmentController = DepartmentController;
//# sourceMappingURL=department.controller.js.map
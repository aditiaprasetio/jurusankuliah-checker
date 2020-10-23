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
const crud_typeorm_1 = require("@nestjsx/crud-typeorm");
const typeorm_1 = require("@nestjs/typeorm");
const detail_entity_1 = require("./detail.entity");
let SubjectDetailService = class SubjectDetailService extends crud_typeorm_1.TypeOrmCrudService {
    constructor(repo) {
        super(repo);
    }
    getAverage() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const list = yield this.repo.find({
                    relations: ['subject'],
                });
                const reduce = list.reduce((res, obj) => {
                    if (res.find((item) => item.id === obj.subject_id)) {
                        res = res.map((item) => {
                            if (item.id === obj.subject_id) {
                                item.data.push({ hafalan: obj.hafalan, analisis: obj.analisis });
                            }
                            return item;
                        });
                    }
                    else {
                        res.push({
                            id: obj.subject.id,
                            name: obj.subject.name,
                            data: [{ hafalan: obj.hafalan, analisis: obj.analisis }],
                        });
                    }
                    return res;
                }, []);
                const listAverage = reduce.map((item) => {
                    let totalHafalan = 0;
                    let totalAnalisis = 0;
                    let count = 0;
                    if (item.data.length > 0) {
                        for (const data of item.data) {
                            totalHafalan += data.hafalan;
                            totalAnalisis += data.analisis;
                            count++;
                        }
                        return Object.assign(Object.assign({}, item), { avg_hafalan: totalHafalan / count, avg_analisis: totalAnalisis / count });
                    }
                    else {
                        return Object.assign(Object.assign({}, item), { avg_hafalan: 50, avg_analisis: 50 });
                    }
                });
                return listAverage;
            }
            catch (err) {
                return Promise.reject(err);
            }
        });
    }
};
SubjectDetailService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(detail_entity_1.SubjectDetail)),
    __metadata("design:paramtypes", [Object])
], SubjectDetailService);
exports.SubjectDetailService = SubjectDetailService;
//# sourceMappingURL=detail.service.js.map
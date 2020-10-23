"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const typeorm_1 = require("@nestjs/typeorm");
const dotenv = require("dotenv");
const core_1 = require("@nestjs/core");
const timeout_interceptor_1 = require("./timeout.interceptor");
const profile_module_1 = require("./profile/profile.module");
const department_module_1 = require("./department/department.module");
const university_module_1 = require("./university/university.module");
const subject_module_1 = require("./subject/subject.module");
const deptfamilysubject_module_1 = require("./deptfamilysubject/deptfamilysubject.module");
const departmentFamily_module_1 = require("./departmentFamily/departmentFamily.module");
const subjectLike_module_1 = require("./subjectLike/subjectLike.module");
const migrations = require("./migrations");
const { parsed } = dotenv.config({
    path: process.cwd() +
        '/.env' +
        (process.env.NODE_ENV ? '.' + process.env.NODE_ENV : ''),
});
process.env = Object.assign(Object.assign({}, process.env), parsed);
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: process.env.TYPEORM_HOST,
                password: process.env.TYPEORM_PASSWORD,
                username: process.env.TYPEORM_USERNAME,
                database: process.env.TYPEORM_DATABASE,
                port: Number(process.env.TYPEORM_PORT),
                entities: [
                    __dirname + '/**/*.entity{.ts,.js}',
                    __dirname + '/**/**/*.entity{.ts,.js}',
                    __dirname + '/**/**/**/*.entity{.ts,.js}',
                ],
                logging: Boolean(process.env.TYPEORM_LOGGING),
                synchronize: false,
                migrationsRun: true,
                dropSchema: false,
                cli: {
                    migrationsDir: __dirname + '/migrations',
                },
                migrations: [
                    migrations.InitDB1601986774361,
                    migrations.AddTableSubjectLike1602908535934,
                ],
            }),
            profile_module_1.ProfileModule,
            university_module_1.UniversityModule,
            department_module_1.DepartmentModule,
            departmentFamily_module_1.DepartmentFamilyModule,
            subject_module_1.SubjectModule,
            deptfamilysubject_module_1.DeptFamilySubjectModule,
            subjectLike_module_1.SubjectLikeModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [
            {
                provide: core_1.APP_INTERCEPTOR,
                useValue: timeout_interceptor_1.TimeoutInterceptor,
            },
            app_service_1.AppService,
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
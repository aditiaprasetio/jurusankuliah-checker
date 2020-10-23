"use strict";
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
class AddTableSubjectLike1602908535934 {
    constructor() {
        this.name = 'AddTableSubjectLike1602908535934';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query('CREATE TABLE `subject_likes` (`id` varchar(255) NOT NULL, `created_at` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6), `subject_id` varchar(255) NOT NULL, `order` int NOT NULL, `created_by_id` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB', undefined);
            yield queryRunner.query('ALTER TABLE `subject_likes` ADD CONSTRAINT `FK_873acf7566481ca122f4327cf18` FOREIGN KEY (`created_by_id`) REFERENCES `profiles`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION', undefined);
            yield queryRunner.query('ALTER TABLE `subject_likes` ADD CONSTRAINT `FK_f8e87456a6dfcbe303c20b090d5` FOREIGN KEY (`subject_id`) REFERENCES `subjects`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION', undefined);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query('ALTER TABLE `subject_likes` DROP FOREIGN KEY `FK_f8e87456a6dfcbe303c20b090d5`', undefined);
            yield queryRunner.query('ALTER TABLE `subject_likes` DROP FOREIGN KEY `FK_873acf7566481ca122f4327cf18`', undefined);
            yield queryRunner.query('DROP TABLE `subject_likes`', undefined);
        });
    }
}
exports.AddTableSubjectLike1602908535934 = AddTableSubjectLike1602908535934;
//# sourceMappingURL=1602908535934-AddTableSubjectLike.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableUpsertWithoutFieldAnnotationsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TableCreateWithoutFieldAnnotationsInput_1 = require("../inputs/TableCreateWithoutFieldAnnotationsInput");
const TableUpdateWithoutFieldAnnotationsInput_1 = require("../inputs/TableUpdateWithoutFieldAnnotationsInput");
const TableWhereInput_1 = require("../inputs/TableWhereInput");
let TableUpsertWithoutFieldAnnotationsInput = class TableUpsertWithoutFieldAnnotationsInput {
    update;
    create;
    where;
};
exports.TableUpsertWithoutFieldAnnotationsInput = TableUpsertWithoutFieldAnnotationsInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TableUpdateWithoutFieldAnnotationsInput_1.TableUpdateWithoutFieldAnnotationsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TableUpdateWithoutFieldAnnotationsInput_1.TableUpdateWithoutFieldAnnotationsInput)
], TableUpsertWithoutFieldAnnotationsInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TableCreateWithoutFieldAnnotationsInput_1.TableCreateWithoutFieldAnnotationsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TableCreateWithoutFieldAnnotationsInput_1.TableCreateWithoutFieldAnnotationsInput)
], TableUpsertWithoutFieldAnnotationsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TableWhereInput_1.TableWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TableWhereInput_1.TableWhereInput)
], TableUpsertWithoutFieldAnnotationsInput.prototype, "where", void 0);
exports.TableUpsertWithoutFieldAnnotationsInput = TableUpsertWithoutFieldAnnotationsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TableUpsertWithoutFieldAnnotationsInput", {})
], TableUpsertWithoutFieldAnnotationsInput);

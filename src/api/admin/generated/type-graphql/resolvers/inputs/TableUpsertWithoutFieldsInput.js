"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableUpsertWithoutFieldsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TableCreateWithoutFieldsInput_1 = require("../inputs/TableCreateWithoutFieldsInput");
const TableUpdateWithoutFieldsInput_1 = require("../inputs/TableUpdateWithoutFieldsInput");
const TableWhereInput_1 = require("../inputs/TableWhereInput");
let TableUpsertWithoutFieldsInput = class TableUpsertWithoutFieldsInput {
    update;
    create;
    where;
};
exports.TableUpsertWithoutFieldsInput = TableUpsertWithoutFieldsInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TableUpdateWithoutFieldsInput_1.TableUpdateWithoutFieldsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TableUpdateWithoutFieldsInput_1.TableUpdateWithoutFieldsInput)
], TableUpsertWithoutFieldsInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TableCreateWithoutFieldsInput_1.TableCreateWithoutFieldsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TableCreateWithoutFieldsInput_1.TableCreateWithoutFieldsInput)
], TableUpsertWithoutFieldsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TableWhereInput_1.TableWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TableWhereInput_1.TableWhereInput)
], TableUpsertWithoutFieldsInput.prototype, "where", void 0);
exports.TableUpsertWithoutFieldsInput = TableUpsertWithoutFieldsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TableUpsertWithoutFieldsInput", {})
], TableUpsertWithoutFieldsInput);

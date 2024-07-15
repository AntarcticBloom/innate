"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableUpdateToOneWithWhereWithoutFieldsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TableUpdateWithoutFieldsInput_1 = require("../inputs/TableUpdateWithoutFieldsInput");
const TableWhereInput_1 = require("../inputs/TableWhereInput");
let TableUpdateToOneWithWhereWithoutFieldsInput = class TableUpdateToOneWithWhereWithoutFieldsInput {
    where;
    data;
};
exports.TableUpdateToOneWithWhereWithoutFieldsInput = TableUpdateToOneWithWhereWithoutFieldsInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TableWhereInput_1.TableWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TableWhereInput_1.TableWhereInput)
], TableUpdateToOneWithWhereWithoutFieldsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TableUpdateWithoutFieldsInput_1.TableUpdateWithoutFieldsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TableUpdateWithoutFieldsInput_1.TableUpdateWithoutFieldsInput)
], TableUpdateToOneWithWhereWithoutFieldsInput.prototype, "data", void 0);
exports.TableUpdateToOneWithWhereWithoutFieldsInput = TableUpdateToOneWithWhereWithoutFieldsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TableUpdateToOneWithWhereWithoutFieldsInput", {})
], TableUpdateToOneWithWhereWithoutFieldsInput);

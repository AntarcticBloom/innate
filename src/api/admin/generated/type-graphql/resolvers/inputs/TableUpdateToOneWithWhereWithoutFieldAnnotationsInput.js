"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableUpdateToOneWithWhereWithoutFieldAnnotationsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TableUpdateWithoutFieldAnnotationsInput_1 = require("../inputs/TableUpdateWithoutFieldAnnotationsInput");
const TableWhereInput_1 = require("../inputs/TableWhereInput");
let TableUpdateToOneWithWhereWithoutFieldAnnotationsInput = class TableUpdateToOneWithWhereWithoutFieldAnnotationsInput {
    where;
    data;
};
exports.TableUpdateToOneWithWhereWithoutFieldAnnotationsInput = TableUpdateToOneWithWhereWithoutFieldAnnotationsInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TableWhereInput_1.TableWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TableWhereInput_1.TableWhereInput)
], TableUpdateToOneWithWhereWithoutFieldAnnotationsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TableUpdateWithoutFieldAnnotationsInput_1.TableUpdateWithoutFieldAnnotationsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TableUpdateWithoutFieldAnnotationsInput_1.TableUpdateWithoutFieldAnnotationsInput)
], TableUpdateToOneWithWhereWithoutFieldAnnotationsInput.prototype, "data", void 0);
exports.TableUpdateToOneWithWhereWithoutFieldAnnotationsInput = TableUpdateToOneWithWhereWithoutFieldAnnotationsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TableUpdateToOneWithWhereWithoutFieldAnnotationsInput", {})
], TableUpdateToOneWithWhereWithoutFieldAnnotationsInput);

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FieldUpdateWithoutFieldAnnotationsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const TableUpdateOneWithoutFieldsNestedInput_1 = require("../inputs/TableUpdateOneWithoutFieldsNestedInput");
let FieldUpdateWithoutFieldAnnotationsInput = class FieldUpdateWithoutFieldAnnotationsInput {
    id;
    name;
    type;
    createdAt;
    updatedAt;
    table;
};
exports.FieldUpdateWithoutFieldAnnotationsInput = FieldUpdateWithoutFieldAnnotationsInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], FieldUpdateWithoutFieldAnnotationsInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], FieldUpdateWithoutFieldAnnotationsInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], FieldUpdateWithoutFieldAnnotationsInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], FieldUpdateWithoutFieldAnnotationsInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], FieldUpdateWithoutFieldAnnotationsInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TableUpdateOneWithoutFieldsNestedInput_1.TableUpdateOneWithoutFieldsNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TableUpdateOneWithoutFieldsNestedInput_1.TableUpdateOneWithoutFieldsNestedInput)
], FieldUpdateWithoutFieldAnnotationsInput.prototype, "table", void 0);
exports.FieldUpdateWithoutFieldAnnotationsInput = FieldUpdateWithoutFieldAnnotationsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("FieldUpdateWithoutFieldAnnotationsInput", {})
], FieldUpdateWithoutFieldAnnotationsInput);

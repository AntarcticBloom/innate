"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FieldUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const FieldAnnotationUpdateManyWithoutFieldNestedInput_1 = require("../inputs/FieldAnnotationUpdateManyWithoutFieldNestedInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const TableUpdateOneWithoutFieldsNestedInput_1 = require("../inputs/TableUpdateOneWithoutFieldsNestedInput");
let FieldUpdateInput = class FieldUpdateInput {
    id;
    name;
    type;
    createdAt;
    updatedAt;
    table;
    fieldAnnotations;
};
exports.FieldUpdateInput = FieldUpdateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], FieldUpdateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], FieldUpdateInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], FieldUpdateInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], FieldUpdateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], FieldUpdateInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TableUpdateOneWithoutFieldsNestedInput_1.TableUpdateOneWithoutFieldsNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TableUpdateOneWithoutFieldsNestedInput_1.TableUpdateOneWithoutFieldsNestedInput)
], FieldUpdateInput.prototype, "table", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FieldAnnotationUpdateManyWithoutFieldNestedInput_1.FieldAnnotationUpdateManyWithoutFieldNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FieldAnnotationUpdateManyWithoutFieldNestedInput_1.FieldAnnotationUpdateManyWithoutFieldNestedInput)
], FieldUpdateInput.prototype, "fieldAnnotations", void 0);
exports.FieldUpdateInput = FieldUpdateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("FieldUpdateInput", {})
], FieldUpdateInput);

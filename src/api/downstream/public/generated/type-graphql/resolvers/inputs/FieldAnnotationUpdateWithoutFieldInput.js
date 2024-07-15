"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FieldAnnotationUpdateWithoutFieldInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const TableUpdateOneWithoutFieldAnnotationsNestedInput_1 = require("../inputs/TableUpdateOneWithoutFieldAnnotationsNestedInput");
let FieldAnnotationUpdateWithoutFieldInput = class FieldAnnotationUpdateWithoutFieldInput {
    id;
    modelName;
    fieldName;
    annotation;
    createdAt;
    updatedAt;
    table;
};
exports.FieldAnnotationUpdateWithoutFieldInput = FieldAnnotationUpdateWithoutFieldInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], FieldAnnotationUpdateWithoutFieldInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], FieldAnnotationUpdateWithoutFieldInput.prototype, "modelName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], FieldAnnotationUpdateWithoutFieldInput.prototype, "fieldName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], FieldAnnotationUpdateWithoutFieldInput.prototype, "annotation", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], FieldAnnotationUpdateWithoutFieldInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], FieldAnnotationUpdateWithoutFieldInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TableUpdateOneWithoutFieldAnnotationsNestedInput_1.TableUpdateOneWithoutFieldAnnotationsNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TableUpdateOneWithoutFieldAnnotationsNestedInput_1.TableUpdateOneWithoutFieldAnnotationsNestedInput)
], FieldAnnotationUpdateWithoutFieldInput.prototype, "table", void 0);
exports.FieldAnnotationUpdateWithoutFieldInput = FieldAnnotationUpdateWithoutFieldInput = tslib_1.__decorate([
    TypeGraphQL.InputType("FieldAnnotationUpdateWithoutFieldInput", {})
], FieldAnnotationUpdateWithoutFieldInput);

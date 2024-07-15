"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FieldAnnotationUpdateWithoutTableInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const FieldUpdateOneWithoutFieldAnnotationsNestedInput_1 = require("../inputs/FieldUpdateOneWithoutFieldAnnotationsNestedInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let FieldAnnotationUpdateWithoutTableInput = class FieldAnnotationUpdateWithoutTableInput {
    id;
    modelName;
    fieldName;
    annotation;
    createdAt;
    updatedAt;
    field;
};
exports.FieldAnnotationUpdateWithoutTableInput = FieldAnnotationUpdateWithoutTableInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], FieldAnnotationUpdateWithoutTableInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], FieldAnnotationUpdateWithoutTableInput.prototype, "modelName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], FieldAnnotationUpdateWithoutTableInput.prototype, "fieldName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], FieldAnnotationUpdateWithoutTableInput.prototype, "annotation", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], FieldAnnotationUpdateWithoutTableInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], FieldAnnotationUpdateWithoutTableInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FieldUpdateOneWithoutFieldAnnotationsNestedInput_1.FieldUpdateOneWithoutFieldAnnotationsNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FieldUpdateOneWithoutFieldAnnotationsNestedInput_1.FieldUpdateOneWithoutFieldAnnotationsNestedInput)
], FieldAnnotationUpdateWithoutTableInput.prototype, "field", void 0);
exports.FieldAnnotationUpdateWithoutTableInput = FieldAnnotationUpdateWithoutTableInput = tslib_1.__decorate([
    TypeGraphQL.InputType("FieldAnnotationUpdateWithoutTableInput", {})
], FieldAnnotationUpdateWithoutTableInput);

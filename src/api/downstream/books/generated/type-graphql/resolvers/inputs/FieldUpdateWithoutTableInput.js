"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FieldUpdateWithoutTableInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const FieldAnnotationUpdateManyWithoutFieldNestedInput_1 = require("../inputs/FieldAnnotationUpdateManyWithoutFieldNestedInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let FieldUpdateWithoutTableInput = class FieldUpdateWithoutTableInput {
    id;
    name;
    type;
    createdAt;
    updatedAt;
    fieldAnnotations;
};
exports.FieldUpdateWithoutTableInput = FieldUpdateWithoutTableInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], FieldUpdateWithoutTableInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], FieldUpdateWithoutTableInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], FieldUpdateWithoutTableInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], FieldUpdateWithoutTableInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], FieldUpdateWithoutTableInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FieldAnnotationUpdateManyWithoutFieldNestedInput_1.FieldAnnotationUpdateManyWithoutFieldNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FieldAnnotationUpdateManyWithoutFieldNestedInput_1.FieldAnnotationUpdateManyWithoutFieldNestedInput)
], FieldUpdateWithoutTableInput.prototype, "fieldAnnotations", void 0);
exports.FieldUpdateWithoutTableInput = FieldUpdateWithoutTableInput = tslib_1.__decorate([
    TypeGraphQL.InputType("FieldUpdateWithoutTableInput", {})
], FieldUpdateWithoutTableInput);

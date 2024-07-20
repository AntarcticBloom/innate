"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FieldAnnotationUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const FieldUpdateOneWithoutFieldAnnotationsNestedInput_1 = require("../inputs/FieldUpdateOneWithoutFieldAnnotationsNestedInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const TableUpdateOneWithoutFieldAnnotationsNestedInput_1 = require("../inputs/TableUpdateOneWithoutFieldAnnotationsNestedInput");
let FieldAnnotationUpdateInput = class FieldAnnotationUpdateInput {
    id;
    modelName;
    fieldName;
    annotation;
    createdAt;
    updatedAt;
    field;
    table;
};
exports.FieldAnnotationUpdateInput = FieldAnnotationUpdateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], FieldAnnotationUpdateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], FieldAnnotationUpdateInput.prototype, "modelName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], FieldAnnotationUpdateInput.prototype, "fieldName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], FieldAnnotationUpdateInput.prototype, "annotation", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], FieldAnnotationUpdateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], FieldAnnotationUpdateInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FieldUpdateOneWithoutFieldAnnotationsNestedInput_1.FieldUpdateOneWithoutFieldAnnotationsNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FieldUpdateOneWithoutFieldAnnotationsNestedInput_1.FieldUpdateOneWithoutFieldAnnotationsNestedInput)
], FieldAnnotationUpdateInput.prototype, "field", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TableUpdateOneWithoutFieldAnnotationsNestedInput_1.TableUpdateOneWithoutFieldAnnotationsNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TableUpdateOneWithoutFieldAnnotationsNestedInput_1.TableUpdateOneWithoutFieldAnnotationsNestedInput)
], FieldAnnotationUpdateInput.prototype, "table", void 0);
exports.FieldAnnotationUpdateInput = FieldAnnotationUpdateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("FieldAnnotationUpdateInput", {})
], FieldAnnotationUpdateInput);

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FieldAnnotationCreateWithoutTableInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FieldCreateNestedOneWithoutFieldAnnotationsInput_1 = require("../inputs/FieldCreateNestedOneWithoutFieldAnnotationsInput");
let FieldAnnotationCreateWithoutTableInput = class FieldAnnotationCreateWithoutTableInput {
    id;
    modelName;
    fieldName;
    annotation;
    createdAt;
    updatedAt;
    field;
};
exports.FieldAnnotationCreateWithoutTableInput = FieldAnnotationCreateWithoutTableInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], FieldAnnotationCreateWithoutTableInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], FieldAnnotationCreateWithoutTableInput.prototype, "modelName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], FieldAnnotationCreateWithoutTableInput.prototype, "fieldName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], FieldAnnotationCreateWithoutTableInput.prototype, "annotation", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], FieldAnnotationCreateWithoutTableInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], FieldAnnotationCreateWithoutTableInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FieldCreateNestedOneWithoutFieldAnnotationsInput_1.FieldCreateNestedOneWithoutFieldAnnotationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FieldCreateNestedOneWithoutFieldAnnotationsInput_1.FieldCreateNestedOneWithoutFieldAnnotationsInput)
], FieldAnnotationCreateWithoutTableInput.prototype, "field", void 0);
exports.FieldAnnotationCreateWithoutTableInput = FieldAnnotationCreateWithoutTableInput = tslib_1.__decorate([
    TypeGraphQL.InputType("FieldAnnotationCreateWithoutTableInput", {})
], FieldAnnotationCreateWithoutTableInput);

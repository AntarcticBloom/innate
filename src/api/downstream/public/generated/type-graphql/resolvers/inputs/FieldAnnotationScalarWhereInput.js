"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FieldAnnotationScalarWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const UuidFilter_1 = require("../inputs/UuidFilter");
const UuidNullableFilter_1 = require("../inputs/UuidNullableFilter");
let FieldAnnotationScalarWhereInput = class FieldAnnotationScalarWhereInput {
    AND;
    OR;
    NOT;
    id;
    tableId;
    modelName;
    fieldId;
    fieldName;
    annotation;
    createdAt;
    updatedAt;
};
exports.FieldAnnotationScalarWhereInput = FieldAnnotationScalarWhereInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FieldAnnotationScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FieldAnnotationScalarWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FieldAnnotationScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FieldAnnotationScalarWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FieldAnnotationScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FieldAnnotationScalarWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UuidFilter_1.UuidFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UuidFilter_1.UuidFilter)
], FieldAnnotationScalarWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UuidNullableFilter_1.UuidNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UuidNullableFilter_1.UuidNullableFilter)
], FieldAnnotationScalarWhereInput.prototype, "tableId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], FieldAnnotationScalarWhereInput.prototype, "modelName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UuidNullableFilter_1.UuidNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UuidNullableFilter_1.UuidNullableFilter)
], FieldAnnotationScalarWhereInput.prototype, "fieldId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], FieldAnnotationScalarWhereInput.prototype, "fieldName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], FieldAnnotationScalarWhereInput.prototype, "annotation", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], FieldAnnotationScalarWhereInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], FieldAnnotationScalarWhereInput.prototype, "updatedAt", void 0);
exports.FieldAnnotationScalarWhereInput = FieldAnnotationScalarWhereInput = tslib_1.__decorate([
    TypeGraphQL.InputType("FieldAnnotationScalarWhereInput", {})
], FieldAnnotationScalarWhereInput);

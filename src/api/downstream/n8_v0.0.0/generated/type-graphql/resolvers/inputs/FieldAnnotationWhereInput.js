"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FieldAnnotationWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const FieldNullableRelationFilter_1 = require("../inputs/FieldNullableRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const TableNullableRelationFilter_1 = require("../inputs/TableNullableRelationFilter");
const UuidFilter_1 = require("../inputs/UuidFilter");
const UuidNullableFilter_1 = require("../inputs/UuidNullableFilter");
let FieldAnnotationWhereInput = class FieldAnnotationWhereInput {
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
    field;
    table;
};
exports.FieldAnnotationWhereInput = FieldAnnotationWhereInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FieldAnnotationWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FieldAnnotationWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FieldAnnotationWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FieldAnnotationWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FieldAnnotationWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FieldAnnotationWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UuidFilter_1.UuidFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UuidFilter_1.UuidFilter)
], FieldAnnotationWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UuidNullableFilter_1.UuidNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UuidNullableFilter_1.UuidNullableFilter)
], FieldAnnotationWhereInput.prototype, "tableId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], FieldAnnotationWhereInput.prototype, "modelName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UuidNullableFilter_1.UuidNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UuidNullableFilter_1.UuidNullableFilter)
], FieldAnnotationWhereInput.prototype, "fieldId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], FieldAnnotationWhereInput.prototype, "fieldName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], FieldAnnotationWhereInput.prototype, "annotation", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], FieldAnnotationWhereInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], FieldAnnotationWhereInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FieldNullableRelationFilter_1.FieldNullableRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FieldNullableRelationFilter_1.FieldNullableRelationFilter)
], FieldAnnotationWhereInput.prototype, "field", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TableNullableRelationFilter_1.TableNullableRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TableNullableRelationFilter_1.TableNullableRelationFilter)
], FieldAnnotationWhereInput.prototype, "table", void 0);
exports.FieldAnnotationWhereInput = FieldAnnotationWhereInput = tslib_1.__decorate([
    TypeGraphQL.InputType("FieldAnnotationWhereInput", {})
], FieldAnnotationWhereInput);

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FieldAnnotationWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const FieldAnnotationWhereInput_1 = require("../inputs/FieldAnnotationWhereInput");
const FieldNullableRelationFilter_1 = require("../inputs/FieldNullableRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const TableNullableRelationFilter_1 = require("../inputs/TableNullableRelationFilter");
const UuidNullableFilter_1 = require("../inputs/UuidNullableFilter");
let FieldAnnotationWhereUniqueInput = class FieldAnnotationWhereUniqueInput {
    id;
    AND;
    OR;
    NOT;
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
exports.FieldAnnotationWhereUniqueInput = FieldAnnotationWhereUniqueInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], FieldAnnotationWhereUniqueInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FieldAnnotationWhereInput_1.FieldAnnotationWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FieldAnnotationWhereUniqueInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FieldAnnotationWhereInput_1.FieldAnnotationWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FieldAnnotationWhereUniqueInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FieldAnnotationWhereInput_1.FieldAnnotationWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FieldAnnotationWhereUniqueInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UuidNullableFilter_1.UuidNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UuidNullableFilter_1.UuidNullableFilter)
], FieldAnnotationWhereUniqueInput.prototype, "tableId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], FieldAnnotationWhereUniqueInput.prototype, "modelName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UuidNullableFilter_1.UuidNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UuidNullableFilter_1.UuidNullableFilter)
], FieldAnnotationWhereUniqueInput.prototype, "fieldId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], FieldAnnotationWhereUniqueInput.prototype, "fieldName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], FieldAnnotationWhereUniqueInput.prototype, "annotation", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], FieldAnnotationWhereUniqueInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], FieldAnnotationWhereUniqueInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FieldNullableRelationFilter_1.FieldNullableRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FieldNullableRelationFilter_1.FieldNullableRelationFilter)
], FieldAnnotationWhereUniqueInput.prototype, "field", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TableNullableRelationFilter_1.TableNullableRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TableNullableRelationFilter_1.TableNullableRelationFilter)
], FieldAnnotationWhereUniqueInput.prototype, "table", void 0);
exports.FieldAnnotationWhereUniqueInput = FieldAnnotationWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("FieldAnnotationWhereUniqueInput", {})
], FieldAnnotationWhereUniqueInput);

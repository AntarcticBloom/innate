"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const FieldAnnotationListRelationFilter_1 = require("../inputs/FieldAnnotationListRelationFilter");
const FieldListRelationFilter_1 = require("../inputs/FieldListRelationFilter");
const JsonNullableFilter_1 = require("../inputs/JsonNullableFilter");
const SchemaNullableRelationFilter_1 = require("../inputs/SchemaNullableRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const UuidFilter_1 = require("../inputs/UuidFilter");
const UuidNullableFilter_1 = require("../inputs/UuidNullableFilter");
let TableWhereInput = class TableWhereInput {
    AND;
    OR;
    NOT;
    id;
    schemaId;
    name;
    modelName;
    relations;
    createdAt;
    updatedAt;
    fields;
    fieldAnnotations;
    schema;
};
exports.TableWhereInput = TableWhereInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TableWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TableWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TableWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TableWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TableWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TableWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UuidFilter_1.UuidFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UuidFilter_1.UuidFilter)
], TableWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UuidNullableFilter_1.UuidNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UuidNullableFilter_1.UuidNullableFilter)
], TableWhereInput.prototype, "schemaId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], TableWhereInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], TableWhereInput.prototype, "modelName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => JsonNullableFilter_1.JsonNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", JsonNullableFilter_1.JsonNullableFilter)
], TableWhereInput.prototype, "relations", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], TableWhereInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], TableWhereInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FieldListRelationFilter_1.FieldListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FieldListRelationFilter_1.FieldListRelationFilter)
], TableWhereInput.prototype, "fields", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FieldAnnotationListRelationFilter_1.FieldAnnotationListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FieldAnnotationListRelationFilter_1.FieldAnnotationListRelationFilter)
], TableWhereInput.prototype, "fieldAnnotations", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SchemaNullableRelationFilter_1.SchemaNullableRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SchemaNullableRelationFilter_1.SchemaNullableRelationFilter)
], TableWhereInput.prototype, "schema", void 0);
exports.TableWhereInput = TableWhereInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TableWhereInput", {})
], TableWhereInput);

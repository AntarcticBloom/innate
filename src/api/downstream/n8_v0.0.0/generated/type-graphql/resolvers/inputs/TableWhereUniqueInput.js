"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const FieldAnnotationListRelationFilter_1 = require("../inputs/FieldAnnotationListRelationFilter");
const FieldListRelationFilter_1 = require("../inputs/FieldListRelationFilter");
const JsonNullableFilter_1 = require("../inputs/JsonNullableFilter");
const SchemaNullableRelationFilter_1 = require("../inputs/SchemaNullableRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const TableWhereInput_1 = require("../inputs/TableWhereInput");
const UuidNullableFilter_1 = require("../inputs/UuidNullableFilter");
let TableWhereUniqueInput = class TableWhereUniqueInput {
    id;
    AND;
    OR;
    NOT;
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
exports.TableWhereUniqueInput = TableWhereUniqueInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TableWhereUniqueInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TableWhereInput_1.TableWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TableWhereUniqueInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TableWhereInput_1.TableWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TableWhereUniqueInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TableWhereInput_1.TableWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TableWhereUniqueInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UuidNullableFilter_1.UuidNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UuidNullableFilter_1.UuidNullableFilter)
], TableWhereUniqueInput.prototype, "schemaId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], TableWhereUniqueInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], TableWhereUniqueInput.prototype, "modelName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => JsonNullableFilter_1.JsonNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", JsonNullableFilter_1.JsonNullableFilter)
], TableWhereUniqueInput.prototype, "relations", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], TableWhereUniqueInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], TableWhereUniqueInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FieldListRelationFilter_1.FieldListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FieldListRelationFilter_1.FieldListRelationFilter)
], TableWhereUniqueInput.prototype, "fields", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FieldAnnotationListRelationFilter_1.FieldAnnotationListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FieldAnnotationListRelationFilter_1.FieldAnnotationListRelationFilter)
], TableWhereUniqueInput.prototype, "fieldAnnotations", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SchemaNullableRelationFilter_1.SchemaNullableRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SchemaNullableRelationFilter_1.SchemaNullableRelationFilter)
], TableWhereUniqueInput.prototype, "schema", void 0);
exports.TableWhereUniqueInput = TableWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TableWhereUniqueInput", {})
], TableWhereUniqueInput);

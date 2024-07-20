"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FieldWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const FieldAnnotationListRelationFilter_1 = require("../inputs/FieldAnnotationListRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const TableNullableRelationFilter_1 = require("../inputs/TableNullableRelationFilter");
const UuidFilter_1 = require("../inputs/UuidFilter");
const UuidNullableFilter_1 = require("../inputs/UuidNullableFilter");
let FieldWhereInput = class FieldWhereInput {
    AND;
    OR;
    NOT;
    id;
    tableId;
    name;
    type;
    createdAt;
    updatedAt;
    table;
    fieldAnnotations;
};
exports.FieldWhereInput = FieldWhereInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FieldWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FieldWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FieldWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FieldWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FieldWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FieldWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UuidFilter_1.UuidFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UuidFilter_1.UuidFilter)
], FieldWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UuidNullableFilter_1.UuidNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UuidNullableFilter_1.UuidNullableFilter)
], FieldWhereInput.prototype, "tableId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], FieldWhereInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], FieldWhereInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], FieldWhereInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], FieldWhereInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TableNullableRelationFilter_1.TableNullableRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TableNullableRelationFilter_1.TableNullableRelationFilter)
], FieldWhereInput.prototype, "table", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FieldAnnotationListRelationFilter_1.FieldAnnotationListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FieldAnnotationListRelationFilter_1.FieldAnnotationListRelationFilter)
], FieldWhereInput.prototype, "fieldAnnotations", void 0);
exports.FieldWhereInput = FieldWhereInput = tslib_1.__decorate([
    TypeGraphQL.InputType("FieldWhereInput", {})
], FieldWhereInput);

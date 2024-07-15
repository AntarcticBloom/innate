"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FieldWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const FieldAnnotationListRelationFilter_1 = require("../inputs/FieldAnnotationListRelationFilter");
const FieldWhereInput_1 = require("../inputs/FieldWhereInput");
const StringFilter_1 = require("../inputs/StringFilter");
const TableNullableRelationFilter_1 = require("../inputs/TableNullableRelationFilter");
const UuidNullableFilter_1 = require("../inputs/UuidNullableFilter");
let FieldWhereUniqueInput = class FieldWhereUniqueInput {
    id;
    AND;
    OR;
    NOT;
    tableId;
    name;
    type;
    createdAt;
    updatedAt;
    table;
    fieldAnnotations;
};
exports.FieldWhereUniqueInput = FieldWhereUniqueInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], FieldWhereUniqueInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FieldWhereInput_1.FieldWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FieldWhereUniqueInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FieldWhereInput_1.FieldWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FieldWhereUniqueInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FieldWhereInput_1.FieldWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FieldWhereUniqueInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UuidNullableFilter_1.UuidNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UuidNullableFilter_1.UuidNullableFilter)
], FieldWhereUniqueInput.prototype, "tableId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], FieldWhereUniqueInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], FieldWhereUniqueInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], FieldWhereUniqueInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], FieldWhereUniqueInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TableNullableRelationFilter_1.TableNullableRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TableNullableRelationFilter_1.TableNullableRelationFilter)
], FieldWhereUniqueInput.prototype, "table", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FieldAnnotationListRelationFilter_1.FieldAnnotationListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FieldAnnotationListRelationFilter_1.FieldAnnotationListRelationFilter)
], FieldWhereUniqueInput.prototype, "fieldAnnotations", void 0);
exports.FieldWhereUniqueInput = FieldWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("FieldWhereUniqueInput", {})
], FieldWhereUniqueInput);

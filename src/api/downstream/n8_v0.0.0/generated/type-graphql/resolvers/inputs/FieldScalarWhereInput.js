"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FieldScalarWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const UuidFilter_1 = require("../inputs/UuidFilter");
const UuidNullableFilter_1 = require("../inputs/UuidNullableFilter");
let FieldScalarWhereInput = class FieldScalarWhereInput {
    AND;
    OR;
    NOT;
    id;
    tableId;
    name;
    type;
    createdAt;
    updatedAt;
};
exports.FieldScalarWhereInput = FieldScalarWhereInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FieldScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FieldScalarWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FieldScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FieldScalarWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FieldScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FieldScalarWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UuidFilter_1.UuidFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UuidFilter_1.UuidFilter)
], FieldScalarWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UuidNullableFilter_1.UuidNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UuidNullableFilter_1.UuidNullableFilter)
], FieldScalarWhereInput.prototype, "tableId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], FieldScalarWhereInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], FieldScalarWhereInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], FieldScalarWhereInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], FieldScalarWhereInput.prototype, "updatedAt", void 0);
exports.FieldScalarWhereInput = FieldScalarWhereInput = tslib_1.__decorate([
    TypeGraphQL.InputType("FieldScalarWhereInput", {})
], FieldScalarWhereInput);

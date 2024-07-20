"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FieldScalarWhereWithAggregatesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeWithAggregatesFilter_1 = require("../inputs/DateTimeWithAggregatesFilter");
const StringWithAggregatesFilter_1 = require("../inputs/StringWithAggregatesFilter");
const UuidNullableWithAggregatesFilter_1 = require("../inputs/UuidNullableWithAggregatesFilter");
const UuidWithAggregatesFilter_1 = require("../inputs/UuidWithAggregatesFilter");
let FieldScalarWhereWithAggregatesInput = class FieldScalarWhereWithAggregatesInput {
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
exports.FieldScalarWhereWithAggregatesInput = FieldScalarWhereWithAggregatesInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FieldScalarWhereWithAggregatesInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FieldScalarWhereWithAggregatesInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FieldScalarWhereWithAggregatesInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FieldScalarWhereWithAggregatesInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FieldScalarWhereWithAggregatesInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FieldScalarWhereWithAggregatesInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UuidWithAggregatesFilter_1.UuidWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UuidWithAggregatesFilter_1.UuidWithAggregatesFilter)
], FieldScalarWhereWithAggregatesInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UuidNullableWithAggregatesFilter_1.UuidNullableWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UuidNullableWithAggregatesFilter_1.UuidNullableWithAggregatesFilter)
], FieldScalarWhereWithAggregatesInput.prototype, "tableId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringWithAggregatesFilter_1.StringWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringWithAggregatesFilter_1.StringWithAggregatesFilter)
], FieldScalarWhereWithAggregatesInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringWithAggregatesFilter_1.StringWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringWithAggregatesFilter_1.StringWithAggregatesFilter)
], FieldScalarWhereWithAggregatesInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter_1.DateTimeWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeWithAggregatesFilter_1.DateTimeWithAggregatesFilter)
], FieldScalarWhereWithAggregatesInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter_1.DateTimeWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeWithAggregatesFilter_1.DateTimeWithAggregatesFilter)
], FieldScalarWhereWithAggregatesInput.prototype, "updatedAt", void 0);
exports.FieldScalarWhereWithAggregatesInput = FieldScalarWhereWithAggregatesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("FieldScalarWhereWithAggregatesInput", {})
], FieldScalarWhereWithAggregatesInput);

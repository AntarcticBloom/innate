"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SchemaScalarWhereWithAggregatesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BoolNullableWithAggregatesFilter_1 = require("../inputs/BoolNullableWithAggregatesFilter");
const DateTimeWithAggregatesFilter_1 = require("../inputs/DateTimeWithAggregatesFilter");
const StringWithAggregatesFilter_1 = require("../inputs/StringWithAggregatesFilter");
const UuidNullableWithAggregatesFilter_1 = require("../inputs/UuidNullableWithAggregatesFilter");
const UuidWithAggregatesFilter_1 = require("../inputs/UuidWithAggregatesFilter");
let SchemaScalarWhereWithAggregatesInput = class SchemaScalarWhereWithAggregatesInput {
    AND;
    OR;
    NOT;
    id;
    name;
    tracked;
    baselineVersionOfSchema;
    isNewestProductionVersion;
    createdAt;
    updatedAt;
};
exports.SchemaScalarWhereWithAggregatesInput = SchemaScalarWhereWithAggregatesInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SchemaScalarWhereWithAggregatesInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SchemaScalarWhereWithAggregatesInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SchemaScalarWhereWithAggregatesInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SchemaScalarWhereWithAggregatesInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SchemaScalarWhereWithAggregatesInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SchemaScalarWhereWithAggregatesInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UuidWithAggregatesFilter_1.UuidWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UuidWithAggregatesFilter_1.UuidWithAggregatesFilter)
], SchemaScalarWhereWithAggregatesInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringWithAggregatesFilter_1.StringWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringWithAggregatesFilter_1.StringWithAggregatesFilter)
], SchemaScalarWhereWithAggregatesInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolNullableWithAggregatesFilter_1.BoolNullableWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolNullableWithAggregatesFilter_1.BoolNullableWithAggregatesFilter)
], SchemaScalarWhereWithAggregatesInput.prototype, "tracked", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UuidNullableWithAggregatesFilter_1.UuidNullableWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UuidNullableWithAggregatesFilter_1.UuidNullableWithAggregatesFilter)
], SchemaScalarWhereWithAggregatesInput.prototype, "baselineVersionOfSchema", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolNullableWithAggregatesFilter_1.BoolNullableWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolNullableWithAggregatesFilter_1.BoolNullableWithAggregatesFilter)
], SchemaScalarWhereWithAggregatesInput.prototype, "isNewestProductionVersion", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter_1.DateTimeWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeWithAggregatesFilter_1.DateTimeWithAggregatesFilter)
], SchemaScalarWhereWithAggregatesInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter_1.DateTimeWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeWithAggregatesFilter_1.DateTimeWithAggregatesFilter)
], SchemaScalarWhereWithAggregatesInput.prototype, "updatedAt", void 0);
exports.SchemaScalarWhereWithAggregatesInput = SchemaScalarWhereWithAggregatesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SchemaScalarWhereWithAggregatesInput", {})
], SchemaScalarWhereWithAggregatesInput);

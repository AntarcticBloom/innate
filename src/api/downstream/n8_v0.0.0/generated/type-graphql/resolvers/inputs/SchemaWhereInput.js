"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SchemaWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BoolNullableFilter_1 = require("../inputs/BoolNullableFilter");
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const TableListRelationFilter_1 = require("../inputs/TableListRelationFilter");
const UuidFilter_1 = require("../inputs/UuidFilter");
const UuidNullableFilter_1 = require("../inputs/UuidNullableFilter");
let SchemaWhereInput = class SchemaWhereInput {
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
    tables;
};
exports.SchemaWhereInput = SchemaWhereInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SchemaWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SchemaWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SchemaWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SchemaWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SchemaWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SchemaWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UuidFilter_1.UuidFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UuidFilter_1.UuidFilter)
], SchemaWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], SchemaWhereInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolNullableFilter_1.BoolNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolNullableFilter_1.BoolNullableFilter)
], SchemaWhereInput.prototype, "tracked", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UuidNullableFilter_1.UuidNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UuidNullableFilter_1.UuidNullableFilter)
], SchemaWhereInput.prototype, "baselineVersionOfSchema", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolNullableFilter_1.BoolNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolNullableFilter_1.BoolNullableFilter)
], SchemaWhereInput.prototype, "isNewestProductionVersion", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], SchemaWhereInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], SchemaWhereInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TableListRelationFilter_1.TableListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TableListRelationFilter_1.TableListRelationFilter)
], SchemaWhereInput.prototype, "tables", void 0);
exports.SchemaWhereInput = SchemaWhereInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SchemaWhereInput", {})
], SchemaWhereInput);

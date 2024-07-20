"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SchemaWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BoolNullableFilter_1 = require("../inputs/BoolNullableFilter");
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const SchemaWhereInput_1 = require("../inputs/SchemaWhereInput");
const TableListRelationFilter_1 = require("../inputs/TableListRelationFilter");
const UuidNullableFilter_1 = require("../inputs/UuidNullableFilter");
let SchemaWhereUniqueInput = class SchemaWhereUniqueInput {
    id;
    name;
    AND;
    OR;
    NOT;
    tracked;
    baselineVersionOfSchema;
    isNewestProductionVersion;
    createdAt;
    updatedAt;
    tables;
};
exports.SchemaWhereUniqueInput = SchemaWhereUniqueInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SchemaWhereUniqueInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SchemaWhereUniqueInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SchemaWhereInput_1.SchemaWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SchemaWhereUniqueInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SchemaWhereInput_1.SchemaWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SchemaWhereUniqueInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SchemaWhereInput_1.SchemaWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SchemaWhereUniqueInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolNullableFilter_1.BoolNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolNullableFilter_1.BoolNullableFilter)
], SchemaWhereUniqueInput.prototype, "tracked", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UuidNullableFilter_1.UuidNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UuidNullableFilter_1.UuidNullableFilter)
], SchemaWhereUniqueInput.prototype, "baselineVersionOfSchema", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolNullableFilter_1.BoolNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolNullableFilter_1.BoolNullableFilter)
], SchemaWhereUniqueInput.prototype, "isNewestProductionVersion", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], SchemaWhereUniqueInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], SchemaWhereUniqueInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TableListRelationFilter_1.TableListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TableListRelationFilter_1.TableListRelationFilter)
], SchemaWhereUniqueInput.prototype, "tables", void 0);
exports.SchemaWhereUniqueInput = SchemaWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SchemaWhereUniqueInput", {})
], SchemaWhereUniqueInput);

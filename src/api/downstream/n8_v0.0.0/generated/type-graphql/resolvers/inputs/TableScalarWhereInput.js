"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableScalarWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const JsonNullableFilter_1 = require("../inputs/JsonNullableFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const UuidFilter_1 = require("../inputs/UuidFilter");
const UuidNullableFilter_1 = require("../inputs/UuidNullableFilter");
let TableScalarWhereInput = class TableScalarWhereInput {
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
};
exports.TableScalarWhereInput = TableScalarWhereInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TableScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TableScalarWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TableScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TableScalarWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TableScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TableScalarWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UuidFilter_1.UuidFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UuidFilter_1.UuidFilter)
], TableScalarWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UuidNullableFilter_1.UuidNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UuidNullableFilter_1.UuidNullableFilter)
], TableScalarWhereInput.prototype, "schemaId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], TableScalarWhereInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], TableScalarWhereInput.prototype, "modelName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => JsonNullableFilter_1.JsonNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", JsonNullableFilter_1.JsonNullableFilter)
], TableScalarWhereInput.prototype, "relations", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], TableScalarWhereInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], TableScalarWhereInput.prototype, "updatedAt", void 0);
exports.TableScalarWhereInput = TableScalarWhereInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TableScalarWhereInput", {})
], TableScalarWhereInput);

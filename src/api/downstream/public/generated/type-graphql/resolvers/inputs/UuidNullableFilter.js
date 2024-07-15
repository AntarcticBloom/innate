"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UuidNullableFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedUuidNullableFilter_1 = require("../inputs/NestedUuidNullableFilter");
const QueryMode_1 = require("../../enums/QueryMode");
let UuidNullableFilter = class UuidNullableFilter {
    equals;
    in;
    notIn;
    lt;
    lte;
    gt;
    gte;
    mode;
    not;
};
exports.UuidNullableFilter = UuidNullableFilter;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UuidNullableFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [String], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UuidNullableFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [String], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UuidNullableFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UuidNullableFilter.prototype, "lt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UuidNullableFilter.prototype, "lte", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UuidNullableFilter.prototype, "gt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UuidNullableFilter.prototype, "gte", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QueryMode_1.QueryMode, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UuidNullableFilter.prototype, "mode", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedUuidNullableFilter_1.NestedUuidNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedUuidNullableFilter_1.NestedUuidNullableFilter)
], UuidNullableFilter.prototype, "not", void 0);
exports.UuidNullableFilter = UuidNullableFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("UuidNullableFilter", {})
], UuidNullableFilter);

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UuidNullableWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedIntNullableFilter_1 = require("../inputs/NestedIntNullableFilter");
const NestedStringNullableFilter_1 = require("../inputs/NestedStringNullableFilter");
const NestedUuidNullableWithAggregatesFilter_1 = require("../inputs/NestedUuidNullableWithAggregatesFilter");
const QueryMode_1 = require("../../enums/QueryMode");
let UuidNullableWithAggregatesFilter = class UuidNullableWithAggregatesFilter {
    equals;
    in;
    notIn;
    lt;
    lte;
    gt;
    gte;
    mode;
    not;
    _count;
    _min;
    _max;
};
exports.UuidNullableWithAggregatesFilter = UuidNullableWithAggregatesFilter;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UuidNullableWithAggregatesFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [String], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UuidNullableWithAggregatesFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [String], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UuidNullableWithAggregatesFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UuidNullableWithAggregatesFilter.prototype, "lt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UuidNullableWithAggregatesFilter.prototype, "lte", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UuidNullableWithAggregatesFilter.prototype, "gt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UuidNullableWithAggregatesFilter.prototype, "gte", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QueryMode_1.QueryMode, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UuidNullableWithAggregatesFilter.prototype, "mode", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedUuidNullableWithAggregatesFilter_1.NestedUuidNullableWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedUuidNullableWithAggregatesFilter_1.NestedUuidNullableWithAggregatesFilter)
], UuidNullableWithAggregatesFilter.prototype, "not", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedIntNullableFilter_1.NestedIntNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedIntNullableFilter_1.NestedIntNullableFilter)
], UuidNullableWithAggregatesFilter.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedStringNullableFilter_1.NestedStringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedStringNullableFilter_1.NestedStringNullableFilter)
], UuidNullableWithAggregatesFilter.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedStringNullableFilter_1.NestedStringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedStringNullableFilter_1.NestedStringNullableFilter)
], UuidNullableWithAggregatesFilter.prototype, "_max", void 0);
exports.UuidNullableWithAggregatesFilter = UuidNullableWithAggregatesFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("UuidNullableWithAggregatesFilter", {})
], UuidNullableWithAggregatesFilter);

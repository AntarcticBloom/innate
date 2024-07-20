"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UuidWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedIntFilter_1 = require("../inputs/NestedIntFilter");
const NestedStringFilter_1 = require("../inputs/NestedStringFilter");
const NestedUuidWithAggregatesFilter_1 = require("../inputs/NestedUuidWithAggregatesFilter");
const QueryMode_1 = require("../../enums/QueryMode");
let UuidWithAggregatesFilter = class UuidWithAggregatesFilter {
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
exports.UuidWithAggregatesFilter = UuidWithAggregatesFilter;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UuidWithAggregatesFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [String], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UuidWithAggregatesFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [String], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UuidWithAggregatesFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UuidWithAggregatesFilter.prototype, "lt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UuidWithAggregatesFilter.prototype, "lte", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UuidWithAggregatesFilter.prototype, "gt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UuidWithAggregatesFilter.prototype, "gte", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QueryMode_1.QueryMode, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UuidWithAggregatesFilter.prototype, "mode", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedUuidWithAggregatesFilter_1.NestedUuidWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedUuidWithAggregatesFilter_1.NestedUuidWithAggregatesFilter)
], UuidWithAggregatesFilter.prototype, "not", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedIntFilter_1.NestedIntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedIntFilter_1.NestedIntFilter)
], UuidWithAggregatesFilter.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedStringFilter_1.NestedStringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedStringFilter_1.NestedStringFilter)
], UuidWithAggregatesFilter.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedStringFilter_1.NestedStringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedStringFilter_1.NestedStringFilter)
], UuidWithAggregatesFilter.prototype, "_max", void 0);
exports.UuidWithAggregatesFilter = UuidWithAggregatesFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("UuidWithAggregatesFilter", {})
], UuidWithAggregatesFilter);

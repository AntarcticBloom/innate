"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedUuidWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedIntFilter_1 = require("../inputs/NestedIntFilter");
const NestedStringFilter_1 = require("../inputs/NestedStringFilter");
let NestedUuidWithAggregatesFilter = class NestedUuidWithAggregatesFilter {
    equals;
    in;
    notIn;
    lt;
    lte;
    gt;
    gte;
    not;
    _count;
    _min;
    _max;
};
exports.NestedUuidWithAggregatesFilter = NestedUuidWithAggregatesFilter;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NestedUuidWithAggregatesFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [String], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedUuidWithAggregatesFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [String], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedUuidWithAggregatesFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NestedUuidWithAggregatesFilter.prototype, "lt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NestedUuidWithAggregatesFilter.prototype, "lte", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NestedUuidWithAggregatesFilter.prototype, "gt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NestedUuidWithAggregatesFilter.prototype, "gte", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedUuidWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedUuidWithAggregatesFilter)
], NestedUuidWithAggregatesFilter.prototype, "not", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedIntFilter_1.NestedIntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedIntFilter_1.NestedIntFilter)
], NestedUuidWithAggregatesFilter.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedStringFilter_1.NestedStringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedStringFilter_1.NestedStringFilter)
], NestedUuidWithAggregatesFilter.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedStringFilter_1.NestedStringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedStringFilter_1.NestedStringFilter)
], NestedUuidWithAggregatesFilter.prototype, "_max", void 0);
exports.NestedUuidWithAggregatesFilter = NestedUuidWithAggregatesFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("NestedUuidWithAggregatesFilter", {})
], NestedUuidWithAggregatesFilter);

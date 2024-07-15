"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UuidFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedUuidFilter_1 = require("../inputs/NestedUuidFilter");
const QueryMode_1 = require("../../enums/QueryMode");
let UuidFilter = class UuidFilter {
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
exports.UuidFilter = UuidFilter;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UuidFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [String], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UuidFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [String], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UuidFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UuidFilter.prototype, "lt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UuidFilter.prototype, "lte", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UuidFilter.prototype, "gt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UuidFilter.prototype, "gte", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QueryMode_1.QueryMode, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UuidFilter.prototype, "mode", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedUuidFilter_1.NestedUuidFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedUuidFilter_1.NestedUuidFilter)
], UuidFilter.prototype, "not", void 0);
exports.UuidFilter = UuidFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("UuidFilter", {})
], UuidFilter);

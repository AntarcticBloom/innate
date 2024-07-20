"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedBoolNullableWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedBoolNullableFilter_1 = require("../inputs/NestedBoolNullableFilter");
const NestedIntNullableFilter_1 = require("../inputs/NestedIntNullableFilter");
let NestedBoolNullableWithAggregatesFilter = class NestedBoolNullableWithAggregatesFilter {
    equals;
    not;
    _count;
    _min;
    _max;
};
exports.NestedBoolNullableWithAggregatesFilter = NestedBoolNullableWithAggregatesFilter;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], NestedBoolNullableWithAggregatesFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedBoolNullableWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedBoolNullableWithAggregatesFilter)
], NestedBoolNullableWithAggregatesFilter.prototype, "not", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedIntNullableFilter_1.NestedIntNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedIntNullableFilter_1.NestedIntNullableFilter)
], NestedBoolNullableWithAggregatesFilter.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedBoolNullableFilter_1.NestedBoolNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedBoolNullableFilter_1.NestedBoolNullableFilter)
], NestedBoolNullableWithAggregatesFilter.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedBoolNullableFilter_1.NestedBoolNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedBoolNullableFilter_1.NestedBoolNullableFilter)
], NestedBoolNullableWithAggregatesFilter.prototype, "_max", void 0);
exports.NestedBoolNullableWithAggregatesFilter = NestedBoolNullableWithAggregatesFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("NestedBoolNullableWithAggregatesFilter", {})
], NestedBoolNullableWithAggregatesFilter);

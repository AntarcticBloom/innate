"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedBoolNullableFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let NestedBoolNullableFilter = class NestedBoolNullableFilter {
    equals;
    not;
};
exports.NestedBoolNullableFilter = NestedBoolNullableFilter;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], NestedBoolNullableFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedBoolNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedBoolNullableFilter)
], NestedBoolNullableFilter.prototype, "not", void 0);
exports.NestedBoolNullableFilter = NestedBoolNullableFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("NestedBoolNullableFilter", {})
], NestedBoolNullableFilter);

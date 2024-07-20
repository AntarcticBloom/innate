"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FieldAnnotationOrderByRelationAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let FieldAnnotationOrderByRelationAggregateInput = class FieldAnnotationOrderByRelationAggregateInput {
    _count;
};
exports.FieldAnnotationOrderByRelationAggregateInput = FieldAnnotationOrderByRelationAggregateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], FieldAnnotationOrderByRelationAggregateInput.prototype, "_count", void 0);
exports.FieldAnnotationOrderByRelationAggregateInput = FieldAnnotationOrderByRelationAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("FieldAnnotationOrderByRelationAggregateInput", {})
], FieldAnnotationOrderByRelationAggregateInput);

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FieldAnnotationOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FieldAnnotationCountOrderByAggregateInput_1 = require("../inputs/FieldAnnotationCountOrderByAggregateInput");
const FieldAnnotationMaxOrderByAggregateInput_1 = require("../inputs/FieldAnnotationMaxOrderByAggregateInput");
const FieldAnnotationMinOrderByAggregateInput_1 = require("../inputs/FieldAnnotationMinOrderByAggregateInput");
const SortOrderInput_1 = require("../inputs/SortOrderInput");
const SortOrder_1 = require("../../enums/SortOrder");
let FieldAnnotationOrderByWithAggregationInput = class FieldAnnotationOrderByWithAggregationInput {
    id;
    tableId;
    modelName;
    fieldId;
    fieldName;
    annotation;
    createdAt;
    updatedAt;
    _count;
    _max;
    _min;
};
exports.FieldAnnotationOrderByWithAggregationInput = FieldAnnotationOrderByWithAggregationInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], FieldAnnotationOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], FieldAnnotationOrderByWithAggregationInput.prototype, "tableId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], FieldAnnotationOrderByWithAggregationInput.prototype, "modelName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], FieldAnnotationOrderByWithAggregationInput.prototype, "fieldId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], FieldAnnotationOrderByWithAggregationInput.prototype, "fieldName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], FieldAnnotationOrderByWithAggregationInput.prototype, "annotation", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], FieldAnnotationOrderByWithAggregationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], FieldAnnotationOrderByWithAggregationInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FieldAnnotationCountOrderByAggregateInput_1.FieldAnnotationCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FieldAnnotationCountOrderByAggregateInput_1.FieldAnnotationCountOrderByAggregateInput)
], FieldAnnotationOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FieldAnnotationMaxOrderByAggregateInput_1.FieldAnnotationMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FieldAnnotationMaxOrderByAggregateInput_1.FieldAnnotationMaxOrderByAggregateInput)
], FieldAnnotationOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FieldAnnotationMinOrderByAggregateInput_1.FieldAnnotationMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FieldAnnotationMinOrderByAggregateInput_1.FieldAnnotationMinOrderByAggregateInput)
], FieldAnnotationOrderByWithAggregationInput.prototype, "_min", void 0);
exports.FieldAnnotationOrderByWithAggregationInput = FieldAnnotationOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("FieldAnnotationOrderByWithAggregationInput", {})
], FieldAnnotationOrderByWithAggregationInput);

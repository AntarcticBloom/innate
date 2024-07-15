"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FieldOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FieldCountOrderByAggregateInput_1 = require("../inputs/FieldCountOrderByAggregateInput");
const FieldMaxOrderByAggregateInput_1 = require("../inputs/FieldMaxOrderByAggregateInput");
const FieldMinOrderByAggregateInput_1 = require("../inputs/FieldMinOrderByAggregateInput");
const SortOrderInput_1 = require("../inputs/SortOrderInput");
const SortOrder_1 = require("../../enums/SortOrder");
let FieldOrderByWithAggregationInput = class FieldOrderByWithAggregationInput {
    id;
    tableId;
    name;
    type;
    createdAt;
    updatedAt;
    _count;
    _max;
    _min;
};
exports.FieldOrderByWithAggregationInput = FieldOrderByWithAggregationInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], FieldOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], FieldOrderByWithAggregationInput.prototype, "tableId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], FieldOrderByWithAggregationInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], FieldOrderByWithAggregationInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], FieldOrderByWithAggregationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], FieldOrderByWithAggregationInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FieldCountOrderByAggregateInput_1.FieldCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FieldCountOrderByAggregateInput_1.FieldCountOrderByAggregateInput)
], FieldOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FieldMaxOrderByAggregateInput_1.FieldMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FieldMaxOrderByAggregateInput_1.FieldMaxOrderByAggregateInput)
], FieldOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FieldMinOrderByAggregateInput_1.FieldMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FieldMinOrderByAggregateInput_1.FieldMinOrderByAggregateInput)
], FieldOrderByWithAggregationInput.prototype, "_min", void 0);
exports.FieldOrderByWithAggregationInput = FieldOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("FieldOrderByWithAggregationInput", {})
], FieldOrderByWithAggregationInput);

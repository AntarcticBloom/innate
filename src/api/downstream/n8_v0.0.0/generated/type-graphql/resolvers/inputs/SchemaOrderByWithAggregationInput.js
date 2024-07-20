"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SchemaOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SchemaCountOrderByAggregateInput_1 = require("../inputs/SchemaCountOrderByAggregateInput");
const SchemaMaxOrderByAggregateInput_1 = require("../inputs/SchemaMaxOrderByAggregateInput");
const SchemaMinOrderByAggregateInput_1 = require("../inputs/SchemaMinOrderByAggregateInput");
const SortOrderInput_1 = require("../inputs/SortOrderInput");
const SortOrder_1 = require("../../enums/SortOrder");
let SchemaOrderByWithAggregationInput = class SchemaOrderByWithAggregationInput {
    id;
    name;
    tracked;
    baselineVersionOfSchema;
    isNewestProductionVersion;
    createdAt;
    updatedAt;
    _count;
    _max;
    _min;
};
exports.SchemaOrderByWithAggregationInput = SchemaOrderByWithAggregationInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SchemaOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SchemaOrderByWithAggregationInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], SchemaOrderByWithAggregationInput.prototype, "tracked", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], SchemaOrderByWithAggregationInput.prototype, "baselineVersionOfSchema", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], SchemaOrderByWithAggregationInput.prototype, "isNewestProductionVersion", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SchemaOrderByWithAggregationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SchemaOrderByWithAggregationInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SchemaCountOrderByAggregateInput_1.SchemaCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SchemaCountOrderByAggregateInput_1.SchemaCountOrderByAggregateInput)
], SchemaOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SchemaMaxOrderByAggregateInput_1.SchemaMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SchemaMaxOrderByAggregateInput_1.SchemaMaxOrderByAggregateInput)
], SchemaOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SchemaMinOrderByAggregateInput_1.SchemaMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SchemaMinOrderByAggregateInput_1.SchemaMinOrderByAggregateInput)
], SchemaOrderByWithAggregationInput.prototype, "_min", void 0);
exports.SchemaOrderByWithAggregationInput = SchemaOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SchemaOrderByWithAggregationInput", {})
], SchemaOrderByWithAggregationInput);

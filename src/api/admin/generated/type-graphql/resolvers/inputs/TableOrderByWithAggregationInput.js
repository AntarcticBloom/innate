"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrderInput_1 = require("../inputs/SortOrderInput");
const TableCountOrderByAggregateInput_1 = require("../inputs/TableCountOrderByAggregateInput");
const TableMaxOrderByAggregateInput_1 = require("../inputs/TableMaxOrderByAggregateInput");
const TableMinOrderByAggregateInput_1 = require("../inputs/TableMinOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let TableOrderByWithAggregationInput = class TableOrderByWithAggregationInput {
    id;
    schemaId;
    name;
    modelName;
    relations;
    createdAt;
    updatedAt;
    _count;
    _max;
    _min;
};
exports.TableOrderByWithAggregationInput = TableOrderByWithAggregationInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TableOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], TableOrderByWithAggregationInput.prototype, "schemaId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TableOrderByWithAggregationInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TableOrderByWithAggregationInput.prototype, "modelName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], TableOrderByWithAggregationInput.prototype, "relations", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TableOrderByWithAggregationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TableOrderByWithAggregationInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TableCountOrderByAggregateInput_1.TableCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TableCountOrderByAggregateInput_1.TableCountOrderByAggregateInput)
], TableOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TableMaxOrderByAggregateInput_1.TableMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TableMaxOrderByAggregateInput_1.TableMaxOrderByAggregateInput)
], TableOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TableMinOrderByAggregateInput_1.TableMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TableMinOrderByAggregateInput_1.TableMinOrderByAggregateInput)
], TableOrderByWithAggregationInput.prototype, "_min", void 0);
exports.TableOrderByWithAggregationInput = TableOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TableOrderByWithAggregationInput", {})
], TableOrderByWithAggregationInput);

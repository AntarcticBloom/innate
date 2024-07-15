"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SchemaMinOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let SchemaMinOrderByAggregateInput = class SchemaMinOrderByAggregateInput {
    id;
    name;
    tracked;
    isNewestProductionVersion;
    createdAt;
    updatedAt;
};
exports.SchemaMinOrderByAggregateInput = SchemaMinOrderByAggregateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SchemaMinOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SchemaMinOrderByAggregateInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SchemaMinOrderByAggregateInput.prototype, "tracked", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SchemaMinOrderByAggregateInput.prototype, "isNewestProductionVersion", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SchemaMinOrderByAggregateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SchemaMinOrderByAggregateInput.prototype, "updatedAt", void 0);
exports.SchemaMinOrderByAggregateInput = SchemaMinOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SchemaMinOrderByAggregateInput", {})
], SchemaMinOrderByAggregateInput);

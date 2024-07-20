"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SchemaCountOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let SchemaCountOrderByAggregateInput = class SchemaCountOrderByAggregateInput {
    id;
    name;
    tracked;
    baselineVersionOfSchema;
    isNewestProductionVersion;
    createdAt;
    updatedAt;
};
exports.SchemaCountOrderByAggregateInput = SchemaCountOrderByAggregateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SchemaCountOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SchemaCountOrderByAggregateInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SchemaCountOrderByAggregateInput.prototype, "tracked", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SchemaCountOrderByAggregateInput.prototype, "baselineVersionOfSchema", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SchemaCountOrderByAggregateInput.prototype, "isNewestProductionVersion", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SchemaCountOrderByAggregateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SchemaCountOrderByAggregateInput.prototype, "updatedAt", void 0);
exports.SchemaCountOrderByAggregateInput = SchemaCountOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SchemaCountOrderByAggregateInput", {})
], SchemaCountOrderByAggregateInput);

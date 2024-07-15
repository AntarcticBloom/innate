"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookMaxOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let BookMaxOrderByAggregateInput = class BookMaxOrderByAggregateInput {
    id;
    name;
    createdAt;
    updatedAt;
};
exports.BookMaxOrderByAggregateInput = BookMaxOrderByAggregateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BookMaxOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BookMaxOrderByAggregateInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BookMaxOrderByAggregateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BookMaxOrderByAggregateInput.prototype, "updatedAt", void 0);
exports.BookMaxOrderByAggregateInput = BookMaxOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BookMaxOrderByAggregateInput", {})
], BookMaxOrderByAggregateInput);

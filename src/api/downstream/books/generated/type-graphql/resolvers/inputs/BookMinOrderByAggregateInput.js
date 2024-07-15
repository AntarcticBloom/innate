"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookMinOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let BookMinOrderByAggregateInput = class BookMinOrderByAggregateInput {
    id;
    name;
    createdAt;
    updatedAt;
};
exports.BookMinOrderByAggregateInput = BookMinOrderByAggregateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BookMinOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BookMinOrderByAggregateInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BookMinOrderByAggregateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BookMinOrderByAggregateInput.prototype, "updatedAt", void 0);
exports.BookMinOrderByAggregateInput = BookMinOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BookMinOrderByAggregateInput", {})
], BookMinOrderByAggregateInput);

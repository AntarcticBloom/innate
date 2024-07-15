"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookAuthorMaxOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let BookAuthorMaxOrderByAggregateInput = class BookAuthorMaxOrderByAggregateInput {
    bookId;
    authorId;
};
exports.BookAuthorMaxOrderByAggregateInput = BookAuthorMaxOrderByAggregateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BookAuthorMaxOrderByAggregateInput.prototype, "bookId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BookAuthorMaxOrderByAggregateInput.prototype, "authorId", void 0);
exports.BookAuthorMaxOrderByAggregateInput = BookAuthorMaxOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BookAuthorMaxOrderByAggregateInput", {})
], BookAuthorMaxOrderByAggregateInput);

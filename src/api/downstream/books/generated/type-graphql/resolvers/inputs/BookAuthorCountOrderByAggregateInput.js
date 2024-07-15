"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookAuthorCountOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let BookAuthorCountOrderByAggregateInput = class BookAuthorCountOrderByAggregateInput {
    bookId;
    authorId;
};
exports.BookAuthorCountOrderByAggregateInput = BookAuthorCountOrderByAggregateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BookAuthorCountOrderByAggregateInput.prototype, "bookId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BookAuthorCountOrderByAggregateInput.prototype, "authorId", void 0);
exports.BookAuthorCountOrderByAggregateInput = BookAuthorCountOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BookAuthorCountOrderByAggregateInput", {})
], BookAuthorCountOrderByAggregateInput);

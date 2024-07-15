"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookAuthorMinOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let BookAuthorMinOrderByAggregateInput = class BookAuthorMinOrderByAggregateInput {
    bookId;
    authorId;
};
exports.BookAuthorMinOrderByAggregateInput = BookAuthorMinOrderByAggregateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BookAuthorMinOrderByAggregateInput.prototype, "bookId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BookAuthorMinOrderByAggregateInput.prototype, "authorId", void 0);
exports.BookAuthorMinOrderByAggregateInput = BookAuthorMinOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BookAuthorMinOrderByAggregateInput", {})
], BookAuthorMinOrderByAggregateInput);

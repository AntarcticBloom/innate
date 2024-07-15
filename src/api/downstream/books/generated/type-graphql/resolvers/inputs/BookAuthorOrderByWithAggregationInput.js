"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookAuthorOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookAuthorCountOrderByAggregateInput_1 = require("../inputs/BookAuthorCountOrderByAggregateInput");
const BookAuthorMaxOrderByAggregateInput_1 = require("../inputs/BookAuthorMaxOrderByAggregateInput");
const BookAuthorMinOrderByAggregateInput_1 = require("../inputs/BookAuthorMinOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let BookAuthorOrderByWithAggregationInput = class BookAuthorOrderByWithAggregationInput {
    bookId;
    authorId;
    _count;
    _max;
    _min;
};
exports.BookAuthorOrderByWithAggregationInput = BookAuthorOrderByWithAggregationInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BookAuthorOrderByWithAggregationInput.prototype, "bookId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BookAuthorOrderByWithAggregationInput.prototype, "authorId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookAuthorCountOrderByAggregateInput_1.BookAuthorCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookAuthorCountOrderByAggregateInput_1.BookAuthorCountOrderByAggregateInput)
], BookAuthorOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookAuthorMaxOrderByAggregateInput_1.BookAuthorMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookAuthorMaxOrderByAggregateInput_1.BookAuthorMaxOrderByAggregateInput)
], BookAuthorOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookAuthorMinOrderByAggregateInput_1.BookAuthorMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookAuthorMinOrderByAggregateInput_1.BookAuthorMinOrderByAggregateInput)
], BookAuthorOrderByWithAggregationInput.prototype, "_min", void 0);
exports.BookAuthorOrderByWithAggregationInput = BookAuthorOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BookAuthorOrderByWithAggregationInput", {})
], BookAuthorOrderByWithAggregationInput);

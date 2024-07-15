"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookAuthorOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AuthorOrderByWithRelationInput_1 = require("../inputs/AuthorOrderByWithRelationInput");
const BookOrderByWithRelationInput_1 = require("../inputs/BookOrderByWithRelationInput");
const SortOrder_1 = require("../../enums/SortOrder");
let BookAuthorOrderByWithRelationInput = class BookAuthorOrderByWithRelationInput {
    bookId;
    authorId;
    author;
    book;
};
exports.BookAuthorOrderByWithRelationInput = BookAuthorOrderByWithRelationInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BookAuthorOrderByWithRelationInput.prototype, "bookId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BookAuthorOrderByWithRelationInput.prototype, "authorId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AuthorOrderByWithRelationInput_1.AuthorOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AuthorOrderByWithRelationInput_1.AuthorOrderByWithRelationInput)
], BookAuthorOrderByWithRelationInput.prototype, "author", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookOrderByWithRelationInput_1.BookOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookOrderByWithRelationInput_1.BookOrderByWithRelationInput)
], BookAuthorOrderByWithRelationInput.prototype, "book", void 0);
exports.BookAuthorOrderByWithRelationInput = BookAuthorOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BookAuthorOrderByWithRelationInput", {})
], BookAuthorOrderByWithRelationInput);

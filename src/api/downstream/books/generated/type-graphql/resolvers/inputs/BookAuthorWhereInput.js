"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookAuthorWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AuthorRelationFilter_1 = require("../inputs/AuthorRelationFilter");
const BookRelationFilter_1 = require("../inputs/BookRelationFilter");
const UuidFilter_1 = require("../inputs/UuidFilter");
let BookAuthorWhereInput = class BookAuthorWhereInput {
    AND;
    OR;
    NOT;
    bookId;
    authorId;
    author;
    book;
};
exports.BookAuthorWhereInput = BookAuthorWhereInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookAuthorWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BookAuthorWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookAuthorWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BookAuthorWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookAuthorWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BookAuthorWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UuidFilter_1.UuidFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UuidFilter_1.UuidFilter)
], BookAuthorWhereInput.prototype, "bookId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UuidFilter_1.UuidFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UuidFilter_1.UuidFilter)
], BookAuthorWhereInput.prototype, "authorId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AuthorRelationFilter_1.AuthorRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AuthorRelationFilter_1.AuthorRelationFilter)
], BookAuthorWhereInput.prototype, "author", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookRelationFilter_1.BookRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookRelationFilter_1.BookRelationFilter)
], BookAuthorWhereInput.prototype, "book", void 0);
exports.BookAuthorWhereInput = BookAuthorWhereInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BookAuthorWhereInput", {})
], BookAuthorWhereInput);

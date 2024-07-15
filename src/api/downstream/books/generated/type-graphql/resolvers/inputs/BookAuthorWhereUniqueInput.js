"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookAuthorWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AuthorRelationFilter_1 = require("../inputs/AuthorRelationFilter");
const BookAuthorBookIdAuthorIdCompoundUniqueInput_1 = require("../inputs/BookAuthorBookIdAuthorIdCompoundUniqueInput");
const BookAuthorWhereInput_1 = require("../inputs/BookAuthorWhereInput");
const BookRelationFilter_1 = require("../inputs/BookRelationFilter");
const UuidFilter_1 = require("../inputs/UuidFilter");
let BookAuthorWhereUniqueInput = class BookAuthorWhereUniqueInput {
    bookId_authorId;
    AND;
    OR;
    NOT;
    bookId;
    authorId;
    author;
    book;
};
exports.BookAuthorWhereUniqueInput = BookAuthorWhereUniqueInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookAuthorBookIdAuthorIdCompoundUniqueInput_1.BookAuthorBookIdAuthorIdCompoundUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookAuthorBookIdAuthorIdCompoundUniqueInput_1.BookAuthorBookIdAuthorIdCompoundUniqueInput)
], BookAuthorWhereUniqueInput.prototype, "bookId_authorId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookAuthorWhereInput_1.BookAuthorWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BookAuthorWhereUniqueInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookAuthorWhereInput_1.BookAuthorWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BookAuthorWhereUniqueInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookAuthorWhereInput_1.BookAuthorWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BookAuthorWhereUniqueInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UuidFilter_1.UuidFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UuidFilter_1.UuidFilter)
], BookAuthorWhereUniqueInput.prototype, "bookId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UuidFilter_1.UuidFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UuidFilter_1.UuidFilter)
], BookAuthorWhereUniqueInput.prototype, "authorId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AuthorRelationFilter_1.AuthorRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AuthorRelationFilter_1.AuthorRelationFilter)
], BookAuthorWhereUniqueInput.prototype, "author", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookRelationFilter_1.BookRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookRelationFilter_1.BookRelationFilter)
], BookAuthorWhereUniqueInput.prototype, "book", void 0);
exports.BookAuthorWhereUniqueInput = BookAuthorWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BookAuthorWhereUniqueInput", {})
], BookAuthorWhereUniqueInput);

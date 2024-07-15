"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookAuthorCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AuthorCreateNestedOneWithoutBookAuthorsInput_1 = require("../inputs/AuthorCreateNestedOneWithoutBookAuthorsInput");
const BookCreateNestedOneWithoutBookAuthorsInput_1 = require("../inputs/BookCreateNestedOneWithoutBookAuthorsInput");
let BookAuthorCreateInput = class BookAuthorCreateInput {
    author;
    book;
};
exports.BookAuthorCreateInput = BookAuthorCreateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AuthorCreateNestedOneWithoutBookAuthorsInput_1.AuthorCreateNestedOneWithoutBookAuthorsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AuthorCreateNestedOneWithoutBookAuthorsInput_1.AuthorCreateNestedOneWithoutBookAuthorsInput)
], BookAuthorCreateInput.prototype, "author", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookCreateNestedOneWithoutBookAuthorsInput_1.BookCreateNestedOneWithoutBookAuthorsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BookCreateNestedOneWithoutBookAuthorsInput_1.BookCreateNestedOneWithoutBookAuthorsInput)
], BookAuthorCreateInput.prototype, "book", void 0);
exports.BookAuthorCreateInput = BookAuthorCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BookAuthorCreateInput", {})
], BookAuthorCreateInput);

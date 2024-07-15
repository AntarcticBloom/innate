"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookAuthorCreateWithoutBookInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AuthorCreateNestedOneWithoutBookAuthorsInput_1 = require("../inputs/AuthorCreateNestedOneWithoutBookAuthorsInput");
let BookAuthorCreateWithoutBookInput = class BookAuthorCreateWithoutBookInput {
    author;
};
exports.BookAuthorCreateWithoutBookInput = BookAuthorCreateWithoutBookInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AuthorCreateNestedOneWithoutBookAuthorsInput_1.AuthorCreateNestedOneWithoutBookAuthorsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AuthorCreateNestedOneWithoutBookAuthorsInput_1.AuthorCreateNestedOneWithoutBookAuthorsInput)
], BookAuthorCreateWithoutBookInput.prototype, "author", void 0);
exports.BookAuthorCreateWithoutBookInput = BookAuthorCreateWithoutBookInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BookAuthorCreateWithoutBookInput", {})
], BookAuthorCreateWithoutBookInput);

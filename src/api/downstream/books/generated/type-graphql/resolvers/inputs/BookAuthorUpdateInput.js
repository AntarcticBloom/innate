"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookAuthorUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AuthorUpdateOneRequiredWithoutBookAuthorsNestedInput_1 = require("../inputs/AuthorUpdateOneRequiredWithoutBookAuthorsNestedInput");
const BookUpdateOneRequiredWithoutBookAuthorsNestedInput_1 = require("../inputs/BookUpdateOneRequiredWithoutBookAuthorsNestedInput");
let BookAuthorUpdateInput = class BookAuthorUpdateInput {
    author;
    book;
};
exports.BookAuthorUpdateInput = BookAuthorUpdateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AuthorUpdateOneRequiredWithoutBookAuthorsNestedInput_1.AuthorUpdateOneRequiredWithoutBookAuthorsNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AuthorUpdateOneRequiredWithoutBookAuthorsNestedInput_1.AuthorUpdateOneRequiredWithoutBookAuthorsNestedInput)
], BookAuthorUpdateInput.prototype, "author", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookUpdateOneRequiredWithoutBookAuthorsNestedInput_1.BookUpdateOneRequiredWithoutBookAuthorsNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookUpdateOneRequiredWithoutBookAuthorsNestedInput_1.BookUpdateOneRequiredWithoutBookAuthorsNestedInput)
], BookAuthorUpdateInput.prototype, "book", void 0);
exports.BookAuthorUpdateInput = BookAuthorUpdateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BookAuthorUpdateInput", {})
], BookAuthorUpdateInput);

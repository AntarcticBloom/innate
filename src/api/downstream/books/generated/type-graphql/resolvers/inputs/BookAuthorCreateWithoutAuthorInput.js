"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookAuthorCreateWithoutAuthorInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookCreateNestedOneWithoutBookAuthorsInput_1 = require("../inputs/BookCreateNestedOneWithoutBookAuthorsInput");
let BookAuthorCreateWithoutAuthorInput = class BookAuthorCreateWithoutAuthorInput {
    book;
};
exports.BookAuthorCreateWithoutAuthorInput = BookAuthorCreateWithoutAuthorInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookCreateNestedOneWithoutBookAuthorsInput_1.BookCreateNestedOneWithoutBookAuthorsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BookCreateNestedOneWithoutBookAuthorsInput_1.BookCreateNestedOneWithoutBookAuthorsInput)
], BookAuthorCreateWithoutAuthorInput.prototype, "book", void 0);
exports.BookAuthorCreateWithoutAuthorInput = BookAuthorCreateWithoutAuthorInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BookAuthorCreateWithoutAuthorInput", {})
], BookAuthorCreateWithoutAuthorInput);

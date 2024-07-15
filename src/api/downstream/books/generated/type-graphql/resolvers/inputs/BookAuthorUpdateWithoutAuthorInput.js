"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookAuthorUpdateWithoutAuthorInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookUpdateOneRequiredWithoutBookAuthorsNestedInput_1 = require("../inputs/BookUpdateOneRequiredWithoutBookAuthorsNestedInput");
let BookAuthorUpdateWithoutAuthorInput = class BookAuthorUpdateWithoutAuthorInput {
    book;
};
exports.BookAuthorUpdateWithoutAuthorInput = BookAuthorUpdateWithoutAuthorInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookUpdateOneRequiredWithoutBookAuthorsNestedInput_1.BookUpdateOneRequiredWithoutBookAuthorsNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookUpdateOneRequiredWithoutBookAuthorsNestedInput_1.BookUpdateOneRequiredWithoutBookAuthorsNestedInput)
], BookAuthorUpdateWithoutAuthorInput.prototype, "book", void 0);
exports.BookAuthorUpdateWithoutAuthorInput = BookAuthorUpdateWithoutAuthorInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BookAuthorUpdateWithoutAuthorInput", {})
], BookAuthorUpdateWithoutAuthorInput);

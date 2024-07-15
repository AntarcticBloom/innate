"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookAuthorUpdateWithoutBookInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AuthorUpdateOneRequiredWithoutBookAuthorsNestedInput_1 = require("../inputs/AuthorUpdateOneRequiredWithoutBookAuthorsNestedInput");
let BookAuthorUpdateWithoutBookInput = class BookAuthorUpdateWithoutBookInput {
    author;
};
exports.BookAuthorUpdateWithoutBookInput = BookAuthorUpdateWithoutBookInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AuthorUpdateOneRequiredWithoutBookAuthorsNestedInput_1.AuthorUpdateOneRequiredWithoutBookAuthorsNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AuthorUpdateOneRequiredWithoutBookAuthorsNestedInput_1.AuthorUpdateOneRequiredWithoutBookAuthorsNestedInput)
], BookAuthorUpdateWithoutBookInput.prototype, "author", void 0);
exports.BookAuthorUpdateWithoutBookInput = BookAuthorUpdateWithoutBookInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BookAuthorUpdateWithoutBookInput", {})
], BookAuthorUpdateWithoutBookInput);

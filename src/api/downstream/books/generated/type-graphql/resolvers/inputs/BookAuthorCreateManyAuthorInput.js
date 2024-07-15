"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookAuthorCreateManyAuthorInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let BookAuthorCreateManyAuthorInput = class BookAuthorCreateManyAuthorInput {
    bookId;
};
exports.BookAuthorCreateManyAuthorInput = BookAuthorCreateManyAuthorInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], BookAuthorCreateManyAuthorInput.prototype, "bookId", void 0);
exports.BookAuthorCreateManyAuthorInput = BookAuthorCreateManyAuthorInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BookAuthorCreateManyAuthorInput", {})
], BookAuthorCreateManyAuthorInput);

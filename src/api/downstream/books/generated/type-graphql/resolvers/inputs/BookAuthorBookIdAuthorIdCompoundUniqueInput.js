"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookAuthorBookIdAuthorIdCompoundUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let BookAuthorBookIdAuthorIdCompoundUniqueInput = class BookAuthorBookIdAuthorIdCompoundUniqueInput {
    bookId;
    authorId;
};
exports.BookAuthorBookIdAuthorIdCompoundUniqueInput = BookAuthorBookIdAuthorIdCompoundUniqueInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], BookAuthorBookIdAuthorIdCompoundUniqueInput.prototype, "bookId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], BookAuthorBookIdAuthorIdCompoundUniqueInput.prototype, "authorId", void 0);
exports.BookAuthorBookIdAuthorIdCompoundUniqueInput = BookAuthorBookIdAuthorIdCompoundUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BookAuthorBookIdAuthorIdCompoundUniqueInput", {})
], BookAuthorBookIdAuthorIdCompoundUniqueInput);

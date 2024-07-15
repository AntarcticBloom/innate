"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookAuthorCreateManyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let BookAuthorCreateManyInput = class BookAuthorCreateManyInput {
    bookId;
    authorId;
};
exports.BookAuthorCreateManyInput = BookAuthorCreateManyInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], BookAuthorCreateManyInput.prototype, "bookId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], BookAuthorCreateManyInput.prototype, "authorId", void 0);
exports.BookAuthorCreateManyInput = BookAuthorCreateManyInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BookAuthorCreateManyInput", {})
], BookAuthorCreateManyInput);

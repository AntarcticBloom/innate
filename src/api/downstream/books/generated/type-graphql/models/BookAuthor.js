"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookAuthor = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let BookAuthor = class BookAuthor {
    bookId;
    authorId;
    author;
    book;
};
exports.BookAuthor = BookAuthor;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], BookAuthor.prototype, "bookId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], BookAuthor.prototype, "authorId", void 0);
exports.BookAuthor = BookAuthor = tslib_1.__decorate([
    TypeGraphQL.ObjectType("BookAuthor", {})
], BookAuthor);

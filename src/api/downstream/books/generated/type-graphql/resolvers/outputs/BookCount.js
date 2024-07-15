"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookCount = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookCountBookAuthorsArgs_1 = require("./args/BookCountBookAuthorsArgs");
let BookCount = class BookCount {
    bookAuthors;
    getBookAuthors(root, args) {
        return root.bookAuthors;
    }
};
exports.BookCount = BookCount;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        name: "bookAuthors",
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [BookCount, BookCountBookAuthorsArgs_1.BookCountBookAuthorsArgs]),
    tslib_1.__metadata("design:returntype", Number)
], BookCount.prototype, "getBookAuthors", null);
exports.BookCount = BookCount = tslib_1.__decorate([
    TypeGraphQL.ObjectType("BookCount", {})
], BookCount);

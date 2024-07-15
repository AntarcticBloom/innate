"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookCount_1 = require("../resolvers/outputs/BookCount");
let Book = class Book {
    id;
    name;
    createdAt;
    updatedAt;
    bookAuthors;
    _count;
};
exports.Book = Book;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Book.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Book.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], Book.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], Book.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookCount_1.BookCount, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookCount_1.BookCount)
], Book.prototype, "_count", void 0);
exports.Book = Book = tslib_1.__decorate([
    TypeGraphQL.ObjectType("Book", {})
], Book);

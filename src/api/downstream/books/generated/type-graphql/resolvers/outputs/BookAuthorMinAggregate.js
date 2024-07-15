"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookAuthorMinAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let BookAuthorMinAggregate = class BookAuthorMinAggregate {
    bookId;
    authorId;
};
exports.BookAuthorMinAggregate = BookAuthorMinAggregate;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BookAuthorMinAggregate.prototype, "bookId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BookAuthorMinAggregate.prototype, "authorId", void 0);
exports.BookAuthorMinAggregate = BookAuthorMinAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("BookAuthorMinAggregate", {})
], BookAuthorMinAggregate);

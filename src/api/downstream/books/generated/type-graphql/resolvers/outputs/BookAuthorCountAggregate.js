"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookAuthorCountAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let BookAuthorCountAggregate = class BookAuthorCountAggregate {
    bookId;
    authorId;
    _all;
};
exports.BookAuthorCountAggregate = BookAuthorCountAggregate;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], BookAuthorCountAggregate.prototype, "bookId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], BookAuthorCountAggregate.prototype, "authorId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], BookAuthorCountAggregate.prototype, "_all", void 0);
exports.BookAuthorCountAggregate = BookAuthorCountAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("BookAuthorCountAggregate", {})
], BookAuthorCountAggregate);

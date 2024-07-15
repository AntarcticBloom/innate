"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookAuthorMaxAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let BookAuthorMaxAggregate = class BookAuthorMaxAggregate {
    bookId;
    authorId;
};
exports.BookAuthorMaxAggregate = BookAuthorMaxAggregate;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BookAuthorMaxAggregate.prototype, "bookId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BookAuthorMaxAggregate.prototype, "authorId", void 0);
exports.BookAuthorMaxAggregate = BookAuthorMaxAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("BookAuthorMaxAggregate", {})
], BookAuthorMaxAggregate);

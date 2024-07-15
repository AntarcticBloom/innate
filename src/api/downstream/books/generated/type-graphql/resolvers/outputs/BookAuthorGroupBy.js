"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookAuthorGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookAuthorCountAggregate_1 = require("../outputs/BookAuthorCountAggregate");
const BookAuthorMaxAggregate_1 = require("../outputs/BookAuthorMaxAggregate");
const BookAuthorMinAggregate_1 = require("../outputs/BookAuthorMinAggregate");
let BookAuthorGroupBy = class BookAuthorGroupBy {
    bookId;
    authorId;
    _count;
    _min;
    _max;
};
exports.BookAuthorGroupBy = BookAuthorGroupBy;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], BookAuthorGroupBy.prototype, "bookId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], BookAuthorGroupBy.prototype, "authorId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookAuthorCountAggregate_1.BookAuthorCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookAuthorCountAggregate_1.BookAuthorCountAggregate)
], BookAuthorGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookAuthorMinAggregate_1.BookAuthorMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookAuthorMinAggregate_1.BookAuthorMinAggregate)
], BookAuthorGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookAuthorMaxAggregate_1.BookAuthorMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookAuthorMaxAggregate_1.BookAuthorMaxAggregate)
], BookAuthorGroupBy.prototype, "_max", void 0);
exports.BookAuthorGroupBy = BookAuthorGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("BookAuthorGroupBy", {})
], BookAuthorGroupBy);

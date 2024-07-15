"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateBookAuthor = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookAuthorCountAggregate_1 = require("../outputs/BookAuthorCountAggregate");
const BookAuthorMaxAggregate_1 = require("../outputs/BookAuthorMaxAggregate");
const BookAuthorMinAggregate_1 = require("../outputs/BookAuthorMinAggregate");
let AggregateBookAuthor = class AggregateBookAuthor {
    _count;
    _min;
    _max;
};
exports.AggregateBookAuthor = AggregateBookAuthor;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookAuthorCountAggregate_1.BookAuthorCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookAuthorCountAggregate_1.BookAuthorCountAggregate)
], AggregateBookAuthor.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookAuthorMinAggregate_1.BookAuthorMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookAuthorMinAggregate_1.BookAuthorMinAggregate)
], AggregateBookAuthor.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookAuthorMaxAggregate_1.BookAuthorMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookAuthorMaxAggregate_1.BookAuthorMaxAggregate)
], AggregateBookAuthor.prototype, "_max", void 0);
exports.AggregateBookAuthor = AggregateBookAuthor = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateBookAuthor", {})
], AggregateBookAuthor);

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateBook = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookCountAggregate_1 = require("../outputs/BookCountAggregate");
const BookMaxAggregate_1 = require("../outputs/BookMaxAggregate");
const BookMinAggregate_1 = require("../outputs/BookMinAggregate");
let AggregateBook = class AggregateBook {
    _count;
    _min;
    _max;
};
exports.AggregateBook = AggregateBook;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookCountAggregate_1.BookCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookCountAggregate_1.BookCountAggregate)
], AggregateBook.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookMinAggregate_1.BookMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookMinAggregate_1.BookMinAggregate)
], AggregateBook.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookMaxAggregate_1.BookMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookMaxAggregate_1.BookMaxAggregate)
], AggregateBook.prototype, "_max", void 0);
exports.AggregateBook = AggregateBook = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateBook", {})
], AggregateBook);

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookCountAggregate_1 = require("../outputs/BookCountAggregate");
const BookMaxAggregate_1 = require("../outputs/BookMaxAggregate");
const BookMinAggregate_1 = require("../outputs/BookMinAggregate");
let BookGroupBy = class BookGroupBy {
    id;
    name;
    createdAt;
    updatedAt;
    _count;
    _min;
    _max;
};
exports.BookGroupBy = BookGroupBy;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], BookGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], BookGroupBy.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], BookGroupBy.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], BookGroupBy.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookCountAggregate_1.BookCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookCountAggregate_1.BookCountAggregate)
], BookGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookMinAggregate_1.BookMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookMinAggregate_1.BookMinAggregate)
], BookGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookMaxAggregate_1.BookMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookMaxAggregate_1.BookMaxAggregate)
], BookGroupBy.prototype, "_max", void 0);
exports.BookGroupBy = BookGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("BookGroupBy", {})
], BookGroupBy);

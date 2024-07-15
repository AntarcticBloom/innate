"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookMaxAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let BookMaxAggregate = class BookMaxAggregate {
    id;
    name;
    createdAt;
    updatedAt;
};
exports.BookMaxAggregate = BookMaxAggregate;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BookMaxAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BookMaxAggregate.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], BookMaxAggregate.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], BookMaxAggregate.prototype, "updatedAt", void 0);
exports.BookMaxAggregate = BookMaxAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("BookMaxAggregate", {})
], BookMaxAggregate);

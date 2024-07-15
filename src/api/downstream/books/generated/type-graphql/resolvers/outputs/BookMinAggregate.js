"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookMinAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let BookMinAggregate = class BookMinAggregate {
    id;
    name;
    createdAt;
    updatedAt;
};
exports.BookMinAggregate = BookMinAggregate;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BookMinAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BookMinAggregate.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], BookMinAggregate.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], BookMinAggregate.prototype, "updatedAt", void 0);
exports.BookMinAggregate = BookMinAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("BookMinAggregate", {})
], BookMinAggregate);

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateAuthor = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AuthorCountAggregate_1 = require("../outputs/AuthorCountAggregate");
const AuthorMaxAggregate_1 = require("../outputs/AuthorMaxAggregate");
const AuthorMinAggregate_1 = require("../outputs/AuthorMinAggregate");
let AggregateAuthor = class AggregateAuthor {
    _count;
    _min;
    _max;
};
exports.AggregateAuthor = AggregateAuthor;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AuthorCountAggregate_1.AuthorCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AuthorCountAggregate_1.AuthorCountAggregate)
], AggregateAuthor.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AuthorMinAggregate_1.AuthorMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AuthorMinAggregate_1.AuthorMinAggregate)
], AggregateAuthor.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AuthorMaxAggregate_1.AuthorMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AuthorMaxAggregate_1.AuthorMaxAggregate)
], AggregateAuthor.prototype, "_max", void 0);
exports.AggregateAuthor = AggregateAuthor = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateAuthor", {})
], AggregateAuthor);

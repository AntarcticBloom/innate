"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AuthorCountAggregate_1 = require("../outputs/AuthorCountAggregate");
const AuthorMaxAggregate_1 = require("../outputs/AuthorMaxAggregate");
const AuthorMinAggregate_1 = require("../outputs/AuthorMinAggregate");
let AuthorGroupBy = class AuthorGroupBy {
    id;
    name;
    createdAt;
    updatedAt;
    _count;
    _min;
    _max;
};
exports.AuthorGroupBy = AuthorGroupBy;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], AuthorGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], AuthorGroupBy.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], AuthorGroupBy.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], AuthorGroupBy.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AuthorCountAggregate_1.AuthorCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AuthorCountAggregate_1.AuthorCountAggregate)
], AuthorGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AuthorMinAggregate_1.AuthorMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AuthorMinAggregate_1.AuthorMinAggregate)
], AuthorGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AuthorMaxAggregate_1.AuthorMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AuthorMaxAggregate_1.AuthorMaxAggregate)
], AuthorGroupBy.prototype, "_max", void 0);
exports.AuthorGroupBy = AuthorGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AuthorGroupBy", {})
], AuthorGroupBy);

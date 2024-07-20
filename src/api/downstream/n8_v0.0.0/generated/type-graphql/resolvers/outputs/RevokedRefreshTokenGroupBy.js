"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RevokedRefreshTokenGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RevokedRefreshTokenCountAggregate_1 = require("../outputs/RevokedRefreshTokenCountAggregate");
const RevokedRefreshTokenMaxAggregate_1 = require("../outputs/RevokedRefreshTokenMaxAggregate");
const RevokedRefreshTokenMinAggregate_1 = require("../outputs/RevokedRefreshTokenMinAggregate");
let RevokedRefreshTokenGroupBy = class RevokedRefreshTokenGroupBy {
    id;
    value;
    actualExpiration;
    _count;
    _min;
    _max;
};
exports.RevokedRefreshTokenGroupBy = RevokedRefreshTokenGroupBy;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], RevokedRefreshTokenGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], RevokedRefreshTokenGroupBy.prototype, "value", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], RevokedRefreshTokenGroupBy.prototype, "actualExpiration", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RevokedRefreshTokenCountAggregate_1.RevokedRefreshTokenCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RevokedRefreshTokenCountAggregate_1.RevokedRefreshTokenCountAggregate)
], RevokedRefreshTokenGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RevokedRefreshTokenMinAggregate_1.RevokedRefreshTokenMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RevokedRefreshTokenMinAggregate_1.RevokedRefreshTokenMinAggregate)
], RevokedRefreshTokenGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RevokedRefreshTokenMaxAggregate_1.RevokedRefreshTokenMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RevokedRefreshTokenMaxAggregate_1.RevokedRefreshTokenMaxAggregate)
], RevokedRefreshTokenGroupBy.prototype, "_max", void 0);
exports.RevokedRefreshTokenGroupBy = RevokedRefreshTokenGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("RevokedRefreshTokenGroupBy", {})
], RevokedRefreshTokenGroupBy);

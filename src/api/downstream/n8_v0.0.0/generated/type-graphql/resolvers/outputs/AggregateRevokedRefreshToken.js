"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateRevokedRefreshToken = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RevokedRefreshTokenCountAggregate_1 = require("../outputs/RevokedRefreshTokenCountAggregate");
const RevokedRefreshTokenMaxAggregate_1 = require("../outputs/RevokedRefreshTokenMaxAggregate");
const RevokedRefreshTokenMinAggregate_1 = require("../outputs/RevokedRefreshTokenMinAggregate");
let AggregateRevokedRefreshToken = class AggregateRevokedRefreshToken {
    _count;
    _min;
    _max;
};
exports.AggregateRevokedRefreshToken = AggregateRevokedRefreshToken;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RevokedRefreshTokenCountAggregate_1.RevokedRefreshTokenCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RevokedRefreshTokenCountAggregate_1.RevokedRefreshTokenCountAggregate)
], AggregateRevokedRefreshToken.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RevokedRefreshTokenMinAggregate_1.RevokedRefreshTokenMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RevokedRefreshTokenMinAggregate_1.RevokedRefreshTokenMinAggregate)
], AggregateRevokedRefreshToken.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RevokedRefreshTokenMaxAggregate_1.RevokedRefreshTokenMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RevokedRefreshTokenMaxAggregate_1.RevokedRefreshTokenMaxAggregate)
], AggregateRevokedRefreshToken.prototype, "_max", void 0);
exports.AggregateRevokedRefreshToken = AggregateRevokedRefreshToken = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateRevokedRefreshToken", {})
], AggregateRevokedRefreshToken);

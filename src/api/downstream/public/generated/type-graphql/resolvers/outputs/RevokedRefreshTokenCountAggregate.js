"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RevokedRefreshTokenCountAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let RevokedRefreshTokenCountAggregate = class RevokedRefreshTokenCountAggregate {
    id;
    value;
    actualExpiration;
    _all;
};
exports.RevokedRefreshTokenCountAggregate = RevokedRefreshTokenCountAggregate;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], RevokedRefreshTokenCountAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], RevokedRefreshTokenCountAggregate.prototype, "value", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], RevokedRefreshTokenCountAggregate.prototype, "actualExpiration", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], RevokedRefreshTokenCountAggregate.prototype, "_all", void 0);
exports.RevokedRefreshTokenCountAggregate = RevokedRefreshTokenCountAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("RevokedRefreshTokenCountAggregate", {})
], RevokedRefreshTokenCountAggregate);

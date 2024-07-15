"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateRevokedRefreshTokenResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateRevokedRefreshTokenArgs_1 = require("./args/AggregateRevokedRefreshTokenArgs");
const RevokedRefreshToken_1 = require("../../../models/RevokedRefreshToken");
const AggregateRevokedRefreshToken_1 = require("../../outputs/AggregateRevokedRefreshToken");
const helpers_1 = require("../../../helpers");
let AggregateRevokedRefreshTokenResolver = class AggregateRevokedRefreshTokenResolver {
    async aggregateRevokedRefreshToken(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).revokedRefreshToken.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
};
exports.AggregateRevokedRefreshTokenResolver = AggregateRevokedRefreshTokenResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateRevokedRefreshToken_1.AggregateRevokedRefreshToken, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateRevokedRefreshTokenArgs_1.AggregateRevokedRefreshTokenArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateRevokedRefreshTokenResolver.prototype, "aggregateRevokedRefreshToken", null);
exports.AggregateRevokedRefreshTokenResolver = AggregateRevokedRefreshTokenResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => RevokedRefreshToken_1.RevokedRefreshToken)
], AggregateRevokedRefreshTokenResolver);

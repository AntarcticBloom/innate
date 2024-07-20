"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueRevokedRefreshTokenOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindUniqueRevokedRefreshTokenOrThrowArgs_1 = require("./args/FindUniqueRevokedRefreshTokenOrThrowArgs");
const RevokedRefreshToken_1 = require("../../../models/RevokedRefreshToken");
const helpers_1 = require("../../../helpers");
let FindUniqueRevokedRefreshTokenOrThrowResolver = class FindUniqueRevokedRefreshTokenOrThrowResolver {
    async getRevokedRefreshToken(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).revokedRefreshToken.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FindUniqueRevokedRefreshTokenOrThrowResolver = FindUniqueRevokedRefreshTokenOrThrowResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => RevokedRefreshToken_1.RevokedRefreshToken, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueRevokedRefreshTokenOrThrowArgs_1.FindUniqueRevokedRefreshTokenOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueRevokedRefreshTokenOrThrowResolver.prototype, "getRevokedRefreshToken", null);
exports.FindUniqueRevokedRefreshTokenOrThrowResolver = FindUniqueRevokedRefreshTokenOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => RevokedRefreshToken_1.RevokedRefreshToken)
], FindUniqueRevokedRefreshTokenOrThrowResolver);

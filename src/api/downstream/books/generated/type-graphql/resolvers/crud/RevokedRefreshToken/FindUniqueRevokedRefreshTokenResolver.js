"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueRevokedRefreshTokenResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindUniqueRevokedRefreshTokenArgs_1 = require("./args/FindUniqueRevokedRefreshTokenArgs");
const RevokedRefreshToken_1 = require("../../../models/RevokedRefreshToken");
const helpers_1 = require("../../../helpers");
let FindUniqueRevokedRefreshTokenResolver = class FindUniqueRevokedRefreshTokenResolver {
    async revokedRefreshToken(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).revokedRefreshToken.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FindUniqueRevokedRefreshTokenResolver = FindUniqueRevokedRefreshTokenResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => RevokedRefreshToken_1.RevokedRefreshToken, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueRevokedRefreshTokenArgs_1.FindUniqueRevokedRefreshTokenArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueRevokedRefreshTokenResolver.prototype, "revokedRefreshToken", null);
exports.FindUniqueRevokedRefreshTokenResolver = FindUniqueRevokedRefreshTokenResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => RevokedRefreshToken_1.RevokedRefreshToken)
], FindUniqueRevokedRefreshTokenResolver);

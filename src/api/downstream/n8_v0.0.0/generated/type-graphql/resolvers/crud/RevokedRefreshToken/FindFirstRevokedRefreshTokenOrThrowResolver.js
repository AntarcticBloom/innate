"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstRevokedRefreshTokenOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindFirstRevokedRefreshTokenOrThrowArgs_1 = require("./args/FindFirstRevokedRefreshTokenOrThrowArgs");
const RevokedRefreshToken_1 = require("../../../models/RevokedRefreshToken");
const helpers_1 = require("../../../helpers");
let FindFirstRevokedRefreshTokenOrThrowResolver = class FindFirstRevokedRefreshTokenOrThrowResolver {
    async findFirstRevokedRefreshTokenOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).revokedRefreshToken.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FindFirstRevokedRefreshTokenOrThrowResolver = FindFirstRevokedRefreshTokenOrThrowResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => RevokedRefreshToken_1.RevokedRefreshToken, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstRevokedRefreshTokenOrThrowArgs_1.FindFirstRevokedRefreshTokenOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstRevokedRefreshTokenOrThrowResolver.prototype, "findFirstRevokedRefreshTokenOrThrow", null);
exports.FindFirstRevokedRefreshTokenOrThrowResolver = FindFirstRevokedRefreshTokenOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => RevokedRefreshToken_1.RevokedRefreshToken)
], FindFirstRevokedRefreshTokenOrThrowResolver);

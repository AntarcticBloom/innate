"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstRevokedRefreshTokenResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindFirstRevokedRefreshTokenArgs_1 = require("./args/FindFirstRevokedRefreshTokenArgs");
const RevokedRefreshToken_1 = require("../../../models/RevokedRefreshToken");
const helpers_1 = require("../../../helpers");
let FindFirstRevokedRefreshTokenResolver = class FindFirstRevokedRefreshTokenResolver {
    async findFirstRevokedRefreshToken(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).revokedRefreshToken.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FindFirstRevokedRefreshTokenResolver = FindFirstRevokedRefreshTokenResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => RevokedRefreshToken_1.RevokedRefreshToken, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstRevokedRefreshTokenArgs_1.FindFirstRevokedRefreshTokenArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstRevokedRefreshTokenResolver.prototype, "findFirstRevokedRefreshToken", null);
exports.FindFirstRevokedRefreshTokenResolver = FindFirstRevokedRefreshTokenResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => RevokedRefreshToken_1.RevokedRefreshToken)
], FindFirstRevokedRefreshTokenResolver);

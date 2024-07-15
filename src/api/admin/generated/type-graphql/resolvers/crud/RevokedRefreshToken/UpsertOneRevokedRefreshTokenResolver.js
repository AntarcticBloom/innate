"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneRevokedRefreshTokenResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpsertOneRevokedRefreshTokenArgs_1 = require("./args/UpsertOneRevokedRefreshTokenArgs");
const RevokedRefreshToken_1 = require("../../../models/RevokedRefreshToken");
const helpers_1 = require("../../../helpers");
let UpsertOneRevokedRefreshTokenResolver = class UpsertOneRevokedRefreshTokenResolver {
    async upsertOneRevokedRefreshToken(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).revokedRefreshToken.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.UpsertOneRevokedRefreshTokenResolver = UpsertOneRevokedRefreshTokenResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => RevokedRefreshToken_1.RevokedRefreshToken, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneRevokedRefreshTokenArgs_1.UpsertOneRevokedRefreshTokenArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpsertOneRevokedRefreshTokenResolver.prototype, "upsertOneRevokedRefreshToken", null);
exports.UpsertOneRevokedRefreshTokenResolver = UpsertOneRevokedRefreshTokenResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => RevokedRefreshToken_1.RevokedRefreshToken)
], UpsertOneRevokedRefreshTokenResolver);

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyRevokedRefreshTokenResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateManyRevokedRefreshTokenArgs_1 = require("./args/UpdateManyRevokedRefreshTokenArgs");
const RevokedRefreshToken_1 = require("../../../models/RevokedRefreshToken");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let UpdateManyRevokedRefreshTokenResolver = class UpdateManyRevokedRefreshTokenResolver {
    async updateManyRevokedRefreshToken(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).revokedRefreshToken.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.UpdateManyRevokedRefreshTokenResolver = UpdateManyRevokedRefreshTokenResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyRevokedRefreshTokenArgs_1.UpdateManyRevokedRefreshTokenArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateManyRevokedRefreshTokenResolver.prototype, "updateManyRevokedRefreshToken", null);
exports.UpdateManyRevokedRefreshTokenResolver = UpdateManyRevokedRefreshTokenResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => RevokedRefreshToken_1.RevokedRefreshToken)
], UpdateManyRevokedRefreshTokenResolver);

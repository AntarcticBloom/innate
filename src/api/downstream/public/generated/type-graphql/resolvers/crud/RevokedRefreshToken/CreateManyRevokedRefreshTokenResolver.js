"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyRevokedRefreshTokenResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateManyRevokedRefreshTokenArgs_1 = require("./args/CreateManyRevokedRefreshTokenArgs");
const RevokedRefreshToken_1 = require("../../../models/RevokedRefreshToken");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let CreateManyRevokedRefreshTokenResolver = class CreateManyRevokedRefreshTokenResolver {
    async createManyRevokedRefreshToken(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).revokedRefreshToken.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.CreateManyRevokedRefreshTokenResolver = CreateManyRevokedRefreshTokenResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyRevokedRefreshTokenArgs_1.CreateManyRevokedRefreshTokenArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateManyRevokedRefreshTokenResolver.prototype, "createManyRevokedRefreshToken", null);
exports.CreateManyRevokedRefreshTokenResolver = CreateManyRevokedRefreshTokenResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => RevokedRefreshToken_1.RevokedRefreshToken)
], CreateManyRevokedRefreshTokenResolver);

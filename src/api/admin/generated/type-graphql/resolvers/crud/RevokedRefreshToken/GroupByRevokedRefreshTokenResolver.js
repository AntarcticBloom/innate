"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByRevokedRefreshTokenResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GroupByRevokedRefreshTokenArgs_1 = require("./args/GroupByRevokedRefreshTokenArgs");
const RevokedRefreshToken_1 = require("../../../models/RevokedRefreshToken");
const RevokedRefreshTokenGroupBy_1 = require("../../outputs/RevokedRefreshTokenGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByRevokedRefreshTokenResolver = class GroupByRevokedRefreshTokenResolver {
    async groupByRevokedRefreshToken(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).revokedRefreshToken.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
exports.GroupByRevokedRefreshTokenResolver = GroupByRevokedRefreshTokenResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [RevokedRefreshTokenGroupBy_1.RevokedRefreshTokenGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByRevokedRefreshTokenArgs_1.GroupByRevokedRefreshTokenArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByRevokedRefreshTokenResolver.prototype, "groupByRevokedRefreshToken", null);
exports.GroupByRevokedRefreshTokenResolver = GroupByRevokedRefreshTokenResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => RevokedRefreshToken_1.RevokedRefreshToken)
], GroupByRevokedRefreshTokenResolver);

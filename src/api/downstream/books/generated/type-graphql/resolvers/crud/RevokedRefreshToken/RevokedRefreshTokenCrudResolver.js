"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RevokedRefreshTokenCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateRevokedRefreshTokenArgs_1 = require("./args/AggregateRevokedRefreshTokenArgs");
const CreateManyRevokedRefreshTokenArgs_1 = require("./args/CreateManyRevokedRefreshTokenArgs");
const CreateOneRevokedRefreshTokenArgs_1 = require("./args/CreateOneRevokedRefreshTokenArgs");
const DeleteManyRevokedRefreshTokenArgs_1 = require("./args/DeleteManyRevokedRefreshTokenArgs");
const DeleteOneRevokedRefreshTokenArgs_1 = require("./args/DeleteOneRevokedRefreshTokenArgs");
const FindFirstRevokedRefreshTokenArgs_1 = require("./args/FindFirstRevokedRefreshTokenArgs");
const FindFirstRevokedRefreshTokenOrThrowArgs_1 = require("./args/FindFirstRevokedRefreshTokenOrThrowArgs");
const FindManyRevokedRefreshTokenArgs_1 = require("./args/FindManyRevokedRefreshTokenArgs");
const FindUniqueRevokedRefreshTokenArgs_1 = require("./args/FindUniqueRevokedRefreshTokenArgs");
const FindUniqueRevokedRefreshTokenOrThrowArgs_1 = require("./args/FindUniqueRevokedRefreshTokenOrThrowArgs");
const GroupByRevokedRefreshTokenArgs_1 = require("./args/GroupByRevokedRefreshTokenArgs");
const UpdateManyRevokedRefreshTokenArgs_1 = require("./args/UpdateManyRevokedRefreshTokenArgs");
const UpdateOneRevokedRefreshTokenArgs_1 = require("./args/UpdateOneRevokedRefreshTokenArgs");
const UpsertOneRevokedRefreshTokenArgs_1 = require("./args/UpsertOneRevokedRefreshTokenArgs");
const helpers_1 = require("../../../helpers");
const RevokedRefreshToken_1 = require("../../../models/RevokedRefreshToken");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateRevokedRefreshToken_1 = require("../../outputs/AggregateRevokedRefreshToken");
const RevokedRefreshTokenGroupBy_1 = require("../../outputs/RevokedRefreshTokenGroupBy");
let RevokedRefreshTokenCrudResolver = class RevokedRefreshTokenCrudResolver {
    async aggregateRevokedRefreshToken(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).revokedRefreshToken.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
    async createManyRevokedRefreshToken(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).revokedRefreshToken.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOneRevokedRefreshToken(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).revokedRefreshToken.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyRevokedRefreshToken(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).revokedRefreshToken.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneRevokedRefreshToken(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).revokedRefreshToken.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstRevokedRefreshToken(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).revokedRefreshToken.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstRevokedRefreshTokenOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).revokedRefreshToken.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async revokedRefreshTokens(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).revokedRefreshToken.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async revokedRefreshToken(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).revokedRefreshToken.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async getRevokedRefreshToken(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).revokedRefreshToken.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByRevokedRefreshToken(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).revokedRefreshToken.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyRevokedRefreshToken(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).revokedRefreshToken.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneRevokedRefreshToken(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).revokedRefreshToken.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneRevokedRefreshToken(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).revokedRefreshToken.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.RevokedRefreshTokenCrudResolver = RevokedRefreshTokenCrudResolver;
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
], RevokedRefreshTokenCrudResolver.prototype, "aggregateRevokedRefreshToken", null);
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
], RevokedRefreshTokenCrudResolver.prototype, "createManyRevokedRefreshToken", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => RevokedRefreshToken_1.RevokedRefreshToken, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneRevokedRefreshTokenArgs_1.CreateOneRevokedRefreshTokenArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], RevokedRefreshTokenCrudResolver.prototype, "createOneRevokedRefreshToken", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyRevokedRefreshTokenArgs_1.DeleteManyRevokedRefreshTokenArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], RevokedRefreshTokenCrudResolver.prototype, "deleteManyRevokedRefreshToken", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => RevokedRefreshToken_1.RevokedRefreshToken, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneRevokedRefreshTokenArgs_1.DeleteOneRevokedRefreshTokenArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], RevokedRefreshTokenCrudResolver.prototype, "deleteOneRevokedRefreshToken", null);
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
], RevokedRefreshTokenCrudResolver.prototype, "findFirstRevokedRefreshToken", null);
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
], RevokedRefreshTokenCrudResolver.prototype, "findFirstRevokedRefreshTokenOrThrow", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [RevokedRefreshToken_1.RevokedRefreshToken], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyRevokedRefreshTokenArgs_1.FindManyRevokedRefreshTokenArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], RevokedRefreshTokenCrudResolver.prototype, "revokedRefreshTokens", null);
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
], RevokedRefreshTokenCrudResolver.prototype, "revokedRefreshToken", null);
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
], RevokedRefreshTokenCrudResolver.prototype, "getRevokedRefreshToken", null);
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
], RevokedRefreshTokenCrudResolver.prototype, "groupByRevokedRefreshToken", null);
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
], RevokedRefreshTokenCrudResolver.prototype, "updateManyRevokedRefreshToken", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => RevokedRefreshToken_1.RevokedRefreshToken, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneRevokedRefreshTokenArgs_1.UpdateOneRevokedRefreshTokenArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], RevokedRefreshTokenCrudResolver.prototype, "updateOneRevokedRefreshToken", null);
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
], RevokedRefreshTokenCrudResolver.prototype, "upsertOneRevokedRefreshToken", null);
exports.RevokedRefreshTokenCrudResolver = RevokedRefreshTokenCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => RevokedRefreshToken_1.RevokedRefreshToken)
], RevokedRefreshTokenCrudResolver);

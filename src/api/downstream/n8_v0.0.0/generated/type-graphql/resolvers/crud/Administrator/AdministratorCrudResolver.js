"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdministratorCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateAdministratorArgs_1 = require("./args/AggregateAdministratorArgs");
const CreateManyAdministratorArgs_1 = require("./args/CreateManyAdministratorArgs");
const CreateOneAdministratorArgs_1 = require("./args/CreateOneAdministratorArgs");
const DeleteManyAdministratorArgs_1 = require("./args/DeleteManyAdministratorArgs");
const DeleteOneAdministratorArgs_1 = require("./args/DeleteOneAdministratorArgs");
const FindFirstAdministratorArgs_1 = require("./args/FindFirstAdministratorArgs");
const FindFirstAdministratorOrThrowArgs_1 = require("./args/FindFirstAdministratorOrThrowArgs");
const FindManyAdministratorArgs_1 = require("./args/FindManyAdministratorArgs");
const FindUniqueAdministratorArgs_1 = require("./args/FindUniqueAdministratorArgs");
const FindUniqueAdministratorOrThrowArgs_1 = require("./args/FindUniqueAdministratorOrThrowArgs");
const GroupByAdministratorArgs_1 = require("./args/GroupByAdministratorArgs");
const UpdateManyAdministratorArgs_1 = require("./args/UpdateManyAdministratorArgs");
const UpdateOneAdministratorArgs_1 = require("./args/UpdateOneAdministratorArgs");
const UpsertOneAdministratorArgs_1 = require("./args/UpsertOneAdministratorArgs");
const helpers_1 = require("../../../helpers");
const Administrator_1 = require("../../../models/Administrator");
const AdministratorGroupBy_1 = require("../../outputs/AdministratorGroupBy");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateAdministrator_1 = require("../../outputs/AggregateAdministrator");
let AdministratorCrudResolver = class AdministratorCrudResolver {
    async aggregateAdministrator(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).administrator.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
    async createManyAdministrator(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).administrator.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOneAdministrator(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).administrator.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyAdministrator(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).administrator.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneAdministrator(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).administrator.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstAdministrator(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).administrator.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstAdministratorOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).administrator.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async administrators(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).administrator.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async administrator(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).administrator.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async getAdministrator(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).administrator.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByAdministrator(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).administrator.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyAdministrator(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).administrator.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneAdministrator(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).administrator.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneAdministrator(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).administrator.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.AdministratorCrudResolver = AdministratorCrudResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateAdministrator_1.AggregateAdministrator, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateAdministratorArgs_1.AggregateAdministratorArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AdministratorCrudResolver.prototype, "aggregateAdministrator", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyAdministratorArgs_1.CreateManyAdministratorArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AdministratorCrudResolver.prototype, "createManyAdministrator", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Administrator_1.Administrator, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneAdministratorArgs_1.CreateOneAdministratorArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AdministratorCrudResolver.prototype, "createOneAdministrator", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyAdministratorArgs_1.DeleteManyAdministratorArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AdministratorCrudResolver.prototype, "deleteManyAdministrator", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Administrator_1.Administrator, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneAdministratorArgs_1.DeleteOneAdministratorArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AdministratorCrudResolver.prototype, "deleteOneAdministrator", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Administrator_1.Administrator, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstAdministratorArgs_1.FindFirstAdministratorArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AdministratorCrudResolver.prototype, "findFirstAdministrator", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Administrator_1.Administrator, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstAdministratorOrThrowArgs_1.FindFirstAdministratorOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AdministratorCrudResolver.prototype, "findFirstAdministratorOrThrow", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Administrator_1.Administrator], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyAdministratorArgs_1.FindManyAdministratorArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AdministratorCrudResolver.prototype, "administrators", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Administrator_1.Administrator, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueAdministratorArgs_1.FindUniqueAdministratorArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AdministratorCrudResolver.prototype, "administrator", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Administrator_1.Administrator, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueAdministratorOrThrowArgs_1.FindUniqueAdministratorOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AdministratorCrudResolver.prototype, "getAdministrator", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [AdministratorGroupBy_1.AdministratorGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByAdministratorArgs_1.GroupByAdministratorArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AdministratorCrudResolver.prototype, "groupByAdministrator", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyAdministratorArgs_1.UpdateManyAdministratorArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AdministratorCrudResolver.prototype, "updateManyAdministrator", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Administrator_1.Administrator, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneAdministratorArgs_1.UpdateOneAdministratorArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AdministratorCrudResolver.prototype, "updateOneAdministrator", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Administrator_1.Administrator, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneAdministratorArgs_1.UpsertOneAdministratorArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AdministratorCrudResolver.prototype, "upsertOneAdministrator", null);
exports.AdministratorCrudResolver = AdministratorCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Administrator_1.Administrator)
], AdministratorCrudResolver);

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateAuthorArgs_1 = require("./args/AggregateAuthorArgs");
const CreateManyAuthorArgs_1 = require("./args/CreateManyAuthorArgs");
const CreateOneAuthorArgs_1 = require("./args/CreateOneAuthorArgs");
const DeleteManyAuthorArgs_1 = require("./args/DeleteManyAuthorArgs");
const DeleteOneAuthorArgs_1 = require("./args/DeleteOneAuthorArgs");
const FindFirstAuthorArgs_1 = require("./args/FindFirstAuthorArgs");
const FindFirstAuthorOrThrowArgs_1 = require("./args/FindFirstAuthorOrThrowArgs");
const FindManyAuthorArgs_1 = require("./args/FindManyAuthorArgs");
const FindUniqueAuthorArgs_1 = require("./args/FindUniqueAuthorArgs");
const FindUniqueAuthorOrThrowArgs_1 = require("./args/FindUniqueAuthorOrThrowArgs");
const GroupByAuthorArgs_1 = require("./args/GroupByAuthorArgs");
const UpdateManyAuthorArgs_1 = require("./args/UpdateManyAuthorArgs");
const UpdateOneAuthorArgs_1 = require("./args/UpdateOneAuthorArgs");
const UpsertOneAuthorArgs_1 = require("./args/UpsertOneAuthorArgs");
const helpers_1 = require("../../../helpers");
const Author_1 = require("../../../models/Author");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateAuthor_1 = require("../../outputs/AggregateAuthor");
const AuthorGroupBy_1 = require("../../outputs/AuthorGroupBy");
let AuthorCrudResolver = class AuthorCrudResolver {
    async aggregateAuthor(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).author.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
    async createManyAuthor(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).author.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOneAuthor(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).author.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyAuthor(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).author.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneAuthor(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).author.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstAuthor(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).author.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstAuthorOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).author.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async authors(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).author.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async author(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).author.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async getAuthor(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).author.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByAuthor(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).author.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyAuthor(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).author.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneAuthor(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).author.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneAuthor(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).author.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.AuthorCrudResolver = AuthorCrudResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateAuthor_1.AggregateAuthor, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateAuthorArgs_1.AggregateAuthorArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AuthorCrudResolver.prototype, "aggregateAuthor", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyAuthorArgs_1.CreateManyAuthorArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AuthorCrudResolver.prototype, "createManyAuthor", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Author_1.Author, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneAuthorArgs_1.CreateOneAuthorArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AuthorCrudResolver.prototype, "createOneAuthor", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyAuthorArgs_1.DeleteManyAuthorArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AuthorCrudResolver.prototype, "deleteManyAuthor", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Author_1.Author, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneAuthorArgs_1.DeleteOneAuthorArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AuthorCrudResolver.prototype, "deleteOneAuthor", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Author_1.Author, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstAuthorArgs_1.FindFirstAuthorArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AuthorCrudResolver.prototype, "findFirstAuthor", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Author_1.Author, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstAuthorOrThrowArgs_1.FindFirstAuthorOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AuthorCrudResolver.prototype, "findFirstAuthorOrThrow", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Author_1.Author], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyAuthorArgs_1.FindManyAuthorArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AuthorCrudResolver.prototype, "authors", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Author_1.Author, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueAuthorArgs_1.FindUniqueAuthorArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AuthorCrudResolver.prototype, "author", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Author_1.Author, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueAuthorOrThrowArgs_1.FindUniqueAuthorOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AuthorCrudResolver.prototype, "getAuthor", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [AuthorGroupBy_1.AuthorGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByAuthorArgs_1.GroupByAuthorArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AuthorCrudResolver.prototype, "groupByAuthor", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyAuthorArgs_1.UpdateManyAuthorArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AuthorCrudResolver.prototype, "updateManyAuthor", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Author_1.Author, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneAuthorArgs_1.UpdateOneAuthorArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AuthorCrudResolver.prototype, "updateOneAuthor", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Author_1.Author, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneAuthorArgs_1.UpsertOneAuthorArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AuthorCrudResolver.prototype, "upsertOneAuthor", null);
exports.AuthorCrudResolver = AuthorCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Author_1.Author)
], AuthorCrudResolver);

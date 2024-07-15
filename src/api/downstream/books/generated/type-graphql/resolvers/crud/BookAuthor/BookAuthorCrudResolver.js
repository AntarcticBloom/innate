"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookAuthorCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateBookAuthorArgs_1 = require("./args/AggregateBookAuthorArgs");
const CreateManyBookAuthorArgs_1 = require("./args/CreateManyBookAuthorArgs");
const CreateOneBookAuthorArgs_1 = require("./args/CreateOneBookAuthorArgs");
const DeleteManyBookAuthorArgs_1 = require("./args/DeleteManyBookAuthorArgs");
const DeleteOneBookAuthorArgs_1 = require("./args/DeleteOneBookAuthorArgs");
const FindFirstBookAuthorArgs_1 = require("./args/FindFirstBookAuthorArgs");
const FindFirstBookAuthorOrThrowArgs_1 = require("./args/FindFirstBookAuthorOrThrowArgs");
const FindManyBookAuthorArgs_1 = require("./args/FindManyBookAuthorArgs");
const FindUniqueBookAuthorArgs_1 = require("./args/FindUniqueBookAuthorArgs");
const FindUniqueBookAuthorOrThrowArgs_1 = require("./args/FindUniqueBookAuthorOrThrowArgs");
const GroupByBookAuthorArgs_1 = require("./args/GroupByBookAuthorArgs");
const UpdateManyBookAuthorArgs_1 = require("./args/UpdateManyBookAuthorArgs");
const UpdateOneBookAuthorArgs_1 = require("./args/UpdateOneBookAuthorArgs");
const UpsertOneBookAuthorArgs_1 = require("./args/UpsertOneBookAuthorArgs");
const helpers_1 = require("../../../helpers");
const BookAuthor_1 = require("../../../models/BookAuthor");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateBookAuthor_1 = require("../../outputs/AggregateBookAuthor");
const BookAuthorGroupBy_1 = require("../../outputs/BookAuthorGroupBy");
let BookAuthorCrudResolver = class BookAuthorCrudResolver {
    async aggregateBookAuthor(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).bookAuthor.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
    async createManyBookAuthor(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).bookAuthor.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOneBookAuthor(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).bookAuthor.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyBookAuthor(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).bookAuthor.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneBookAuthor(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).bookAuthor.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstBookAuthor(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).bookAuthor.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstBookAuthorOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).bookAuthor.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async bookAuthors(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).bookAuthor.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async bookAuthor(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).bookAuthor.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async getBookAuthor(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).bookAuthor.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByBookAuthor(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).bookAuthor.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyBookAuthor(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).bookAuthor.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneBookAuthor(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).bookAuthor.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneBookAuthor(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).bookAuthor.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.BookAuthorCrudResolver = BookAuthorCrudResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateBookAuthor_1.AggregateBookAuthor, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateBookAuthorArgs_1.AggregateBookAuthorArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], BookAuthorCrudResolver.prototype, "aggregateBookAuthor", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyBookAuthorArgs_1.CreateManyBookAuthorArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], BookAuthorCrudResolver.prototype, "createManyBookAuthor", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => BookAuthor_1.BookAuthor, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneBookAuthorArgs_1.CreateOneBookAuthorArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], BookAuthorCrudResolver.prototype, "createOneBookAuthor", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyBookAuthorArgs_1.DeleteManyBookAuthorArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], BookAuthorCrudResolver.prototype, "deleteManyBookAuthor", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => BookAuthor_1.BookAuthor, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneBookAuthorArgs_1.DeleteOneBookAuthorArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], BookAuthorCrudResolver.prototype, "deleteOneBookAuthor", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => BookAuthor_1.BookAuthor, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstBookAuthorArgs_1.FindFirstBookAuthorArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], BookAuthorCrudResolver.prototype, "findFirstBookAuthor", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => BookAuthor_1.BookAuthor, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstBookAuthorOrThrowArgs_1.FindFirstBookAuthorOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], BookAuthorCrudResolver.prototype, "findFirstBookAuthorOrThrow", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [BookAuthor_1.BookAuthor], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyBookAuthorArgs_1.FindManyBookAuthorArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], BookAuthorCrudResolver.prototype, "bookAuthors", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => BookAuthor_1.BookAuthor, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueBookAuthorArgs_1.FindUniqueBookAuthorArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], BookAuthorCrudResolver.prototype, "bookAuthor", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => BookAuthor_1.BookAuthor, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueBookAuthorOrThrowArgs_1.FindUniqueBookAuthorOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], BookAuthorCrudResolver.prototype, "getBookAuthor", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [BookAuthorGroupBy_1.BookAuthorGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByBookAuthorArgs_1.GroupByBookAuthorArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], BookAuthorCrudResolver.prototype, "groupByBookAuthor", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyBookAuthorArgs_1.UpdateManyBookAuthorArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], BookAuthorCrudResolver.prototype, "updateManyBookAuthor", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => BookAuthor_1.BookAuthor, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneBookAuthorArgs_1.UpdateOneBookAuthorArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], BookAuthorCrudResolver.prototype, "updateOneBookAuthor", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => BookAuthor_1.BookAuthor, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneBookAuthorArgs_1.UpsertOneBookAuthorArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], BookAuthorCrudResolver.prototype, "upsertOneBookAuthor", null);
exports.BookAuthorCrudResolver = BookAuthorCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => BookAuthor_1.BookAuthor)
], BookAuthorCrudResolver);

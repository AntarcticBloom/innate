"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateBookArgs_1 = require("./args/AggregateBookArgs");
const CreateManyBookArgs_1 = require("./args/CreateManyBookArgs");
const CreateOneBookArgs_1 = require("./args/CreateOneBookArgs");
const DeleteManyBookArgs_1 = require("./args/DeleteManyBookArgs");
const DeleteOneBookArgs_1 = require("./args/DeleteOneBookArgs");
const FindFirstBookArgs_1 = require("./args/FindFirstBookArgs");
const FindFirstBookOrThrowArgs_1 = require("./args/FindFirstBookOrThrowArgs");
const FindManyBookArgs_1 = require("./args/FindManyBookArgs");
const FindUniqueBookArgs_1 = require("./args/FindUniqueBookArgs");
const FindUniqueBookOrThrowArgs_1 = require("./args/FindUniqueBookOrThrowArgs");
const GroupByBookArgs_1 = require("./args/GroupByBookArgs");
const UpdateManyBookArgs_1 = require("./args/UpdateManyBookArgs");
const UpdateOneBookArgs_1 = require("./args/UpdateOneBookArgs");
const UpsertOneBookArgs_1 = require("./args/UpsertOneBookArgs");
const helpers_1 = require("../../../helpers");
const Book_1 = require("../../../models/Book");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateBook_1 = require("../../outputs/AggregateBook");
const BookGroupBy_1 = require("../../outputs/BookGroupBy");
let BookCrudResolver = class BookCrudResolver {
    async aggregateBook(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).book.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
    async createManyBook(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).book.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOneBook(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).book.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyBook(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).book.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneBook(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).book.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstBook(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).book.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstBookOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).book.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async books(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).book.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async book(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).book.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async getBook(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).book.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByBook(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).book.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyBook(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).book.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneBook(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).book.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneBook(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).book.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.BookCrudResolver = BookCrudResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateBook_1.AggregateBook, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateBookArgs_1.AggregateBookArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], BookCrudResolver.prototype, "aggregateBook", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyBookArgs_1.CreateManyBookArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], BookCrudResolver.prototype, "createManyBook", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Book_1.Book, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneBookArgs_1.CreateOneBookArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], BookCrudResolver.prototype, "createOneBook", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyBookArgs_1.DeleteManyBookArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], BookCrudResolver.prototype, "deleteManyBook", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Book_1.Book, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneBookArgs_1.DeleteOneBookArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], BookCrudResolver.prototype, "deleteOneBook", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Book_1.Book, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstBookArgs_1.FindFirstBookArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], BookCrudResolver.prototype, "findFirstBook", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Book_1.Book, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstBookOrThrowArgs_1.FindFirstBookOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], BookCrudResolver.prototype, "findFirstBookOrThrow", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Book_1.Book], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyBookArgs_1.FindManyBookArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], BookCrudResolver.prototype, "books", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Book_1.Book, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueBookArgs_1.FindUniqueBookArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], BookCrudResolver.prototype, "book", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Book_1.Book, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueBookOrThrowArgs_1.FindUniqueBookOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], BookCrudResolver.prototype, "getBook", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [BookGroupBy_1.BookGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByBookArgs_1.GroupByBookArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], BookCrudResolver.prototype, "groupByBook", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyBookArgs_1.UpdateManyBookArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], BookCrudResolver.prototype, "updateManyBook", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Book_1.Book, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneBookArgs_1.UpdateOneBookArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], BookCrudResolver.prototype, "updateOneBook", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Book_1.Book, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneBookArgs_1.UpsertOneBookArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], BookCrudResolver.prototype, "upsertOneBook", null);
exports.BookCrudResolver = BookCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Book_1.Book)
], BookCrudResolver);

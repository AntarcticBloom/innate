"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateTableArgs_1 = require("./args/AggregateTableArgs");
const CreateManyTableArgs_1 = require("./args/CreateManyTableArgs");
const CreateOneTableArgs_1 = require("./args/CreateOneTableArgs");
const DeleteManyTableArgs_1 = require("./args/DeleteManyTableArgs");
const DeleteOneTableArgs_1 = require("./args/DeleteOneTableArgs");
const FindFirstTableArgs_1 = require("./args/FindFirstTableArgs");
const FindFirstTableOrThrowArgs_1 = require("./args/FindFirstTableOrThrowArgs");
const FindManyTableArgs_1 = require("./args/FindManyTableArgs");
const FindUniqueTableArgs_1 = require("./args/FindUniqueTableArgs");
const FindUniqueTableOrThrowArgs_1 = require("./args/FindUniqueTableOrThrowArgs");
const GroupByTableArgs_1 = require("./args/GroupByTableArgs");
const UpdateManyTableArgs_1 = require("./args/UpdateManyTableArgs");
const UpdateOneTableArgs_1 = require("./args/UpdateOneTableArgs");
const UpsertOneTableArgs_1 = require("./args/UpsertOneTableArgs");
const helpers_1 = require("../../../helpers");
const Table_1 = require("../../../models/Table");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateTable_1 = require("../../outputs/AggregateTable");
const TableGroupBy_1 = require("../../outputs/TableGroupBy");
let TableCrudResolver = class TableCrudResolver {
    async aggregateTable(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).table.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
    async createManyTable(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).table.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOneTable(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).table.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyTable(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).table.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneTable(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).table.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstTable(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).table.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstTableOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).table.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async tables(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).table.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async table(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).table.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async getTable(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).table.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByTable(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).table.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyTable(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).table.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneTable(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).table.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneTable(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).table.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.TableCrudResolver = TableCrudResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateTable_1.AggregateTable, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateTableArgs_1.AggregateTableArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TableCrudResolver.prototype, "aggregateTable", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyTableArgs_1.CreateManyTableArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TableCrudResolver.prototype, "createManyTable", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Table_1.Table, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneTableArgs_1.CreateOneTableArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TableCrudResolver.prototype, "createOneTable", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyTableArgs_1.DeleteManyTableArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TableCrudResolver.prototype, "deleteManyTable", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Table_1.Table, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneTableArgs_1.DeleteOneTableArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TableCrudResolver.prototype, "deleteOneTable", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Table_1.Table, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstTableArgs_1.FindFirstTableArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TableCrudResolver.prototype, "findFirstTable", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Table_1.Table, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstTableOrThrowArgs_1.FindFirstTableOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TableCrudResolver.prototype, "findFirstTableOrThrow", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Table_1.Table], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyTableArgs_1.FindManyTableArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TableCrudResolver.prototype, "tables", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Table_1.Table, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueTableArgs_1.FindUniqueTableArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TableCrudResolver.prototype, "table", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Table_1.Table, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueTableOrThrowArgs_1.FindUniqueTableOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TableCrudResolver.prototype, "getTable", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [TableGroupBy_1.TableGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByTableArgs_1.GroupByTableArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TableCrudResolver.prototype, "groupByTable", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyTableArgs_1.UpdateManyTableArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TableCrudResolver.prototype, "updateManyTable", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Table_1.Table, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneTableArgs_1.UpdateOneTableArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TableCrudResolver.prototype, "updateOneTable", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Table_1.Table, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneTableArgs_1.UpsertOneTableArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TableCrudResolver.prototype, "upsertOneTable", null);
exports.TableCrudResolver = TableCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Table_1.Table)
], TableCrudResolver);

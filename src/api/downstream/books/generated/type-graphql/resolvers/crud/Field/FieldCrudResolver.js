"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FieldCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateFieldArgs_1 = require("./args/AggregateFieldArgs");
const CreateManyFieldArgs_1 = require("./args/CreateManyFieldArgs");
const CreateOneFieldArgs_1 = require("./args/CreateOneFieldArgs");
const DeleteManyFieldArgs_1 = require("./args/DeleteManyFieldArgs");
const DeleteOneFieldArgs_1 = require("./args/DeleteOneFieldArgs");
const FindFirstFieldArgs_1 = require("./args/FindFirstFieldArgs");
const FindFirstFieldOrThrowArgs_1 = require("./args/FindFirstFieldOrThrowArgs");
const FindManyFieldArgs_1 = require("./args/FindManyFieldArgs");
const FindUniqueFieldArgs_1 = require("./args/FindUniqueFieldArgs");
const FindUniqueFieldOrThrowArgs_1 = require("./args/FindUniqueFieldOrThrowArgs");
const GroupByFieldArgs_1 = require("./args/GroupByFieldArgs");
const UpdateManyFieldArgs_1 = require("./args/UpdateManyFieldArgs");
const UpdateOneFieldArgs_1 = require("./args/UpdateOneFieldArgs");
const UpsertOneFieldArgs_1 = require("./args/UpsertOneFieldArgs");
const helpers_1 = require("../../../helpers");
const Field_1 = require("../../../models/Field");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateField_1 = require("../../outputs/AggregateField");
const FieldGroupBy_1 = require("../../outputs/FieldGroupBy");
let FieldCrudResolver = class FieldCrudResolver {
    async aggregateField(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).field.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
    async createManyField(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).field.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOneField(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).field.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyField(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).field.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneField(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).field.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstField(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).field.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstFieldOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).field.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async fields(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).field.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async field(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).field.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async getField(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).field.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByField(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).field.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyField(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).field.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneField(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).field.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneField(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).field.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FieldCrudResolver = FieldCrudResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateField_1.AggregateField, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateFieldArgs_1.AggregateFieldArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FieldCrudResolver.prototype, "aggregateField", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyFieldArgs_1.CreateManyFieldArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FieldCrudResolver.prototype, "createManyField", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Field_1.Field, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneFieldArgs_1.CreateOneFieldArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FieldCrudResolver.prototype, "createOneField", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyFieldArgs_1.DeleteManyFieldArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FieldCrudResolver.prototype, "deleteManyField", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Field_1.Field, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneFieldArgs_1.DeleteOneFieldArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FieldCrudResolver.prototype, "deleteOneField", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Field_1.Field, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstFieldArgs_1.FindFirstFieldArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FieldCrudResolver.prototype, "findFirstField", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Field_1.Field, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstFieldOrThrowArgs_1.FindFirstFieldOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FieldCrudResolver.prototype, "findFirstFieldOrThrow", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Field_1.Field], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyFieldArgs_1.FindManyFieldArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FieldCrudResolver.prototype, "fields", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Field_1.Field, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueFieldArgs_1.FindUniqueFieldArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FieldCrudResolver.prototype, "field", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Field_1.Field, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueFieldOrThrowArgs_1.FindUniqueFieldOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FieldCrudResolver.prototype, "getField", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [FieldGroupBy_1.FieldGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByFieldArgs_1.GroupByFieldArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FieldCrudResolver.prototype, "groupByField", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyFieldArgs_1.UpdateManyFieldArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FieldCrudResolver.prototype, "updateManyField", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Field_1.Field, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneFieldArgs_1.UpdateOneFieldArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FieldCrudResolver.prototype, "updateOneField", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Field_1.Field, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneFieldArgs_1.UpsertOneFieldArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FieldCrudResolver.prototype, "upsertOneField", null);
exports.FieldCrudResolver = FieldCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Field_1.Field)
], FieldCrudResolver);

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FieldAnnotationCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateFieldAnnotationArgs_1 = require("./args/AggregateFieldAnnotationArgs");
const CreateManyFieldAnnotationArgs_1 = require("./args/CreateManyFieldAnnotationArgs");
const CreateOneFieldAnnotationArgs_1 = require("./args/CreateOneFieldAnnotationArgs");
const DeleteManyFieldAnnotationArgs_1 = require("./args/DeleteManyFieldAnnotationArgs");
const DeleteOneFieldAnnotationArgs_1 = require("./args/DeleteOneFieldAnnotationArgs");
const FindFirstFieldAnnotationArgs_1 = require("./args/FindFirstFieldAnnotationArgs");
const FindFirstFieldAnnotationOrThrowArgs_1 = require("./args/FindFirstFieldAnnotationOrThrowArgs");
const FindManyFieldAnnotationArgs_1 = require("./args/FindManyFieldAnnotationArgs");
const FindUniqueFieldAnnotationArgs_1 = require("./args/FindUniqueFieldAnnotationArgs");
const FindUniqueFieldAnnotationOrThrowArgs_1 = require("./args/FindUniqueFieldAnnotationOrThrowArgs");
const GroupByFieldAnnotationArgs_1 = require("./args/GroupByFieldAnnotationArgs");
const UpdateManyFieldAnnotationArgs_1 = require("./args/UpdateManyFieldAnnotationArgs");
const UpdateOneFieldAnnotationArgs_1 = require("./args/UpdateOneFieldAnnotationArgs");
const UpsertOneFieldAnnotationArgs_1 = require("./args/UpsertOneFieldAnnotationArgs");
const helpers_1 = require("../../../helpers");
const FieldAnnotation_1 = require("../../../models/FieldAnnotation");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateFieldAnnotation_1 = require("../../outputs/AggregateFieldAnnotation");
const FieldAnnotationGroupBy_1 = require("../../outputs/FieldAnnotationGroupBy");
let FieldAnnotationCrudResolver = class FieldAnnotationCrudResolver {
    async aggregateFieldAnnotation(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).fieldAnnotation.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
    async createManyFieldAnnotation(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).fieldAnnotation.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOneFieldAnnotation(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).fieldAnnotation.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyFieldAnnotation(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).fieldAnnotation.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneFieldAnnotation(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).fieldAnnotation.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstFieldAnnotation(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).fieldAnnotation.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstFieldAnnotationOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).fieldAnnotation.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async fieldAnnotations(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).fieldAnnotation.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async fieldAnnotation(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).fieldAnnotation.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async getFieldAnnotation(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).fieldAnnotation.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByFieldAnnotation(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).fieldAnnotation.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyFieldAnnotation(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).fieldAnnotation.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneFieldAnnotation(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).fieldAnnotation.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneFieldAnnotation(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).fieldAnnotation.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FieldAnnotationCrudResolver = FieldAnnotationCrudResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateFieldAnnotation_1.AggregateFieldAnnotation, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateFieldAnnotationArgs_1.AggregateFieldAnnotationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FieldAnnotationCrudResolver.prototype, "aggregateFieldAnnotation", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyFieldAnnotationArgs_1.CreateManyFieldAnnotationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FieldAnnotationCrudResolver.prototype, "createManyFieldAnnotation", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => FieldAnnotation_1.FieldAnnotation, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneFieldAnnotationArgs_1.CreateOneFieldAnnotationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FieldAnnotationCrudResolver.prototype, "createOneFieldAnnotation", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyFieldAnnotationArgs_1.DeleteManyFieldAnnotationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FieldAnnotationCrudResolver.prototype, "deleteManyFieldAnnotation", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => FieldAnnotation_1.FieldAnnotation, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneFieldAnnotationArgs_1.DeleteOneFieldAnnotationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FieldAnnotationCrudResolver.prototype, "deleteOneFieldAnnotation", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => FieldAnnotation_1.FieldAnnotation, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstFieldAnnotationArgs_1.FindFirstFieldAnnotationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FieldAnnotationCrudResolver.prototype, "findFirstFieldAnnotation", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => FieldAnnotation_1.FieldAnnotation, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstFieldAnnotationOrThrowArgs_1.FindFirstFieldAnnotationOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FieldAnnotationCrudResolver.prototype, "findFirstFieldAnnotationOrThrow", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [FieldAnnotation_1.FieldAnnotation], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyFieldAnnotationArgs_1.FindManyFieldAnnotationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FieldAnnotationCrudResolver.prototype, "fieldAnnotations", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => FieldAnnotation_1.FieldAnnotation, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueFieldAnnotationArgs_1.FindUniqueFieldAnnotationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FieldAnnotationCrudResolver.prototype, "fieldAnnotation", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => FieldAnnotation_1.FieldAnnotation, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueFieldAnnotationOrThrowArgs_1.FindUniqueFieldAnnotationOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FieldAnnotationCrudResolver.prototype, "getFieldAnnotation", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [FieldAnnotationGroupBy_1.FieldAnnotationGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByFieldAnnotationArgs_1.GroupByFieldAnnotationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FieldAnnotationCrudResolver.prototype, "groupByFieldAnnotation", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyFieldAnnotationArgs_1.UpdateManyFieldAnnotationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FieldAnnotationCrudResolver.prototype, "updateManyFieldAnnotation", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => FieldAnnotation_1.FieldAnnotation, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneFieldAnnotationArgs_1.UpdateOneFieldAnnotationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FieldAnnotationCrudResolver.prototype, "updateOneFieldAnnotation", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => FieldAnnotation_1.FieldAnnotation, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneFieldAnnotationArgs_1.UpsertOneFieldAnnotationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FieldAnnotationCrudResolver.prototype, "upsertOneFieldAnnotation", null);
exports.FieldAnnotationCrudResolver = FieldAnnotationCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => FieldAnnotation_1.FieldAnnotation)
], FieldAnnotationCrudResolver);

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FieldAnnotationRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Field_1 = require("../../../models/Field");
const FieldAnnotation_1 = require("../../../models/FieldAnnotation");
const Table_1 = require("../../../models/Table");
const FieldAnnotationFieldArgs_1 = require("./args/FieldAnnotationFieldArgs");
const FieldAnnotationTableArgs_1 = require("./args/FieldAnnotationTableArgs");
const helpers_1 = require("../../../helpers");
let FieldAnnotationRelationsResolver = class FieldAnnotationRelationsResolver {
    async field(fieldAnnotation, ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).fieldAnnotation.findUniqueOrThrow({
            where: {
                id: fieldAnnotation.id,
            },
        }).field({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async table(fieldAnnotation, ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).fieldAnnotation.findUniqueOrThrow({
            where: {
                id: fieldAnnotation.id,
            },
        }).table({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FieldAnnotationRelationsResolver = FieldAnnotationRelationsResolver;
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Field_1.Field, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__param(3, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [FieldAnnotation_1.FieldAnnotation, Object, Object, FieldAnnotationFieldArgs_1.FieldAnnotationFieldArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FieldAnnotationRelationsResolver.prototype, "field", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Table_1.Table, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__param(3, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [FieldAnnotation_1.FieldAnnotation, Object, Object, FieldAnnotationTableArgs_1.FieldAnnotationTableArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FieldAnnotationRelationsResolver.prototype, "table", null);
exports.FieldAnnotationRelationsResolver = FieldAnnotationRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => FieldAnnotation_1.FieldAnnotation)
], FieldAnnotationRelationsResolver);

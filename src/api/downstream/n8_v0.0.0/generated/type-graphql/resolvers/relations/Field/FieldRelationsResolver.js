"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FieldRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Field_1 = require("../../../models/Field");
const FieldAnnotation_1 = require("../../../models/FieldAnnotation");
const Table_1 = require("../../../models/Table");
const FieldFieldAnnotationsArgs_1 = require("./args/FieldFieldAnnotationsArgs");
const FieldTableArgs_1 = require("./args/FieldTableArgs");
const helpers_1 = require("../../../helpers");
let FieldRelationsResolver = class FieldRelationsResolver {
    async table(field, ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).field.findUniqueOrThrow({
            where: {
                id: field.id,
            },
        }).table({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async fieldAnnotations(field, ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).field.findUniqueOrThrow({
            where: {
                id: field.id,
            },
        }).fieldAnnotations({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FieldRelationsResolver = FieldRelationsResolver;
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Table_1.Table, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__param(3, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Field_1.Field, Object, Object, FieldTableArgs_1.FieldTableArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FieldRelationsResolver.prototype, "table", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [FieldAnnotation_1.FieldAnnotation], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__param(3, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Field_1.Field, Object, Object, FieldFieldAnnotationsArgs_1.FieldFieldAnnotationsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FieldRelationsResolver.prototype, "fieldAnnotations", null);
exports.FieldRelationsResolver = FieldRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Field_1.Field)
], FieldRelationsResolver);

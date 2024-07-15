"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Field_1 = require("../../../models/Field");
const FieldAnnotation_1 = require("../../../models/FieldAnnotation");
const Schema_1 = require("../../../models/Schema");
const Table_1 = require("../../../models/Table");
const TableFieldAnnotationsArgs_1 = require("./args/TableFieldAnnotationsArgs");
const TableFieldsArgs_1 = require("./args/TableFieldsArgs");
const TableSchemaArgs_1 = require("./args/TableSchemaArgs");
const helpers_1 = require("../../../helpers");
let TableRelationsResolver = class TableRelationsResolver {
    async fields(table, ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).table.findUniqueOrThrow({
            where: {
                id: table.id,
            },
        }).fields({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async fieldAnnotations(table, ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).table.findUniqueOrThrow({
            where: {
                id: table.id,
            },
        }).fieldAnnotations({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async schema(table, ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).table.findUniqueOrThrow({
            where: {
                id: table.id,
            },
        }).schema({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.TableRelationsResolver = TableRelationsResolver;
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [Field_1.Field], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__param(3, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Table_1.Table, Object, Object, TableFieldsArgs_1.TableFieldsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TableRelationsResolver.prototype, "fields", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [FieldAnnotation_1.FieldAnnotation], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__param(3, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Table_1.Table, Object, Object, TableFieldAnnotationsArgs_1.TableFieldAnnotationsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TableRelationsResolver.prototype, "fieldAnnotations", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Schema_1.Schema, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__param(3, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Table_1.Table, Object, Object, TableSchemaArgs_1.TableSchemaArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TableRelationsResolver.prototype, "schema", null);
exports.TableRelationsResolver = TableRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Table_1.Table)
], TableRelationsResolver);

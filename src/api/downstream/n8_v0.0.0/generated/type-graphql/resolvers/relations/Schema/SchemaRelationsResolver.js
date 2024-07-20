"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SchemaRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Schema_1 = require("../../../models/Schema");
const Table_1 = require("../../../models/Table");
const SchemaTablesArgs_1 = require("./args/SchemaTablesArgs");
const helpers_1 = require("../../../helpers");
let SchemaRelationsResolver = class SchemaRelationsResolver {
    async tables(schema, ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).schema.findUniqueOrThrow({
            where: {
                id: schema.id,
            },
        }).tables({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.SchemaRelationsResolver = SchemaRelationsResolver;
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [Table_1.Table], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__param(3, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Schema_1.Schema, Object, Object, SchemaTablesArgs_1.SchemaTablesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SchemaRelationsResolver.prototype, "tables", null);
exports.SchemaRelationsResolver = SchemaRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Schema_1.Schema)
], SchemaRelationsResolver);

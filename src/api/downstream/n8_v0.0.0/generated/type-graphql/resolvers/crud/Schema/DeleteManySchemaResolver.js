"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManySchemaResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteManySchemaArgs_1 = require("./args/DeleteManySchemaArgs");
const Schema_1 = require("../../../models/Schema");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let DeleteManySchemaResolver = class DeleteManySchemaResolver {
    async deleteManySchema(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).schema.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.DeleteManySchemaResolver = DeleteManySchemaResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManySchemaArgs_1.DeleteManySchemaArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteManySchemaResolver.prototype, "deleteManySchema", null);
exports.DeleteManySchemaResolver = DeleteManySchemaResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Schema_1.Schema)
], DeleteManySchemaResolver);

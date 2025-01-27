"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyTableResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteManyTableArgs_1 = require("./args/DeleteManyTableArgs");
const Table_1 = require("../../../models/Table");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let DeleteManyTableResolver = class DeleteManyTableResolver {
    async deleteManyTable(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).table.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.DeleteManyTableResolver = DeleteManyTableResolver;
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
], DeleteManyTableResolver.prototype, "deleteManyTable", null);
exports.DeleteManyTableResolver = DeleteManyTableResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Table_1.Table)
], DeleteManyTableResolver);

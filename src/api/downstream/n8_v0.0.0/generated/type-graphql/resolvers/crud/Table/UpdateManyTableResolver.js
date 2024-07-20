"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyTableResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateManyTableArgs_1 = require("./args/UpdateManyTableArgs");
const Table_1 = require("../../../models/Table");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let UpdateManyTableResolver = class UpdateManyTableResolver {
    async updateManyTable(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).table.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.UpdateManyTableResolver = UpdateManyTableResolver;
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
], UpdateManyTableResolver.prototype, "updateManyTable", null);
exports.UpdateManyTableResolver = UpdateManyTableResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Table_1.Table)
], UpdateManyTableResolver);

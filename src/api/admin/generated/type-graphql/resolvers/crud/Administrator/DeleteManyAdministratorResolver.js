"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyAdministratorResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteManyAdministratorArgs_1 = require("./args/DeleteManyAdministratorArgs");
const Administrator_1 = require("../../../models/Administrator");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let DeleteManyAdministratorResolver = class DeleteManyAdministratorResolver {
    async deleteManyAdministrator(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).administrator.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.DeleteManyAdministratorResolver = DeleteManyAdministratorResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyAdministratorArgs_1.DeleteManyAdministratorArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteManyAdministratorResolver.prototype, "deleteManyAdministrator", null);
exports.DeleteManyAdministratorResolver = DeleteManyAdministratorResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Administrator_1.Administrator)
], DeleteManyAdministratorResolver);

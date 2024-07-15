"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyAdministratorResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateManyAdministratorArgs_1 = require("./args/UpdateManyAdministratorArgs");
const Administrator_1 = require("../../../models/Administrator");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let UpdateManyAdministratorResolver = class UpdateManyAdministratorResolver {
    async updateManyAdministrator(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).administrator.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.UpdateManyAdministratorResolver = UpdateManyAdministratorResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyAdministratorArgs_1.UpdateManyAdministratorArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateManyAdministratorResolver.prototype, "updateManyAdministrator", null);
exports.UpdateManyAdministratorResolver = UpdateManyAdministratorResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Administrator_1.Administrator)
], UpdateManyAdministratorResolver);

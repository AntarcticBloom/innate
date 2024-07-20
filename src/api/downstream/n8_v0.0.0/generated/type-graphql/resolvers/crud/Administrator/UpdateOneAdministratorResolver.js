"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneAdministratorResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateOneAdministratorArgs_1 = require("./args/UpdateOneAdministratorArgs");
const Administrator_1 = require("../../../models/Administrator");
const helpers_1 = require("../../../helpers");
let UpdateOneAdministratorResolver = class UpdateOneAdministratorResolver {
    async updateOneAdministrator(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).administrator.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.UpdateOneAdministratorResolver = UpdateOneAdministratorResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Administrator_1.Administrator, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneAdministratorArgs_1.UpdateOneAdministratorArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateOneAdministratorResolver.prototype, "updateOneAdministrator", null);
exports.UpdateOneAdministratorResolver = UpdateOneAdministratorResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Administrator_1.Administrator)
], UpdateOneAdministratorResolver);

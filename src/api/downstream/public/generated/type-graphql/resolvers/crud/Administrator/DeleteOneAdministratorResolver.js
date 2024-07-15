"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneAdministratorResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteOneAdministratorArgs_1 = require("./args/DeleteOneAdministratorArgs");
const Administrator_1 = require("../../../models/Administrator");
const helpers_1 = require("../../../helpers");
let DeleteOneAdministratorResolver = class DeleteOneAdministratorResolver {
    async deleteOneAdministrator(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).administrator.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.DeleteOneAdministratorResolver = DeleteOneAdministratorResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Administrator_1.Administrator, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneAdministratorArgs_1.DeleteOneAdministratorArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteOneAdministratorResolver.prototype, "deleteOneAdministrator", null);
exports.DeleteOneAdministratorResolver = DeleteOneAdministratorResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Administrator_1.Administrator)
], DeleteOneAdministratorResolver);

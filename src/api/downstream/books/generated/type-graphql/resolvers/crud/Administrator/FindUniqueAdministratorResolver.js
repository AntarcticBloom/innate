"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueAdministratorResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindUniqueAdministratorArgs_1 = require("./args/FindUniqueAdministratorArgs");
const Administrator_1 = require("../../../models/Administrator");
const helpers_1 = require("../../../helpers");
let FindUniqueAdministratorResolver = class FindUniqueAdministratorResolver {
    async administrator(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).administrator.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FindUniqueAdministratorResolver = FindUniqueAdministratorResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Administrator_1.Administrator, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueAdministratorArgs_1.FindUniqueAdministratorArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueAdministratorResolver.prototype, "administrator", null);
exports.FindUniqueAdministratorResolver = FindUniqueAdministratorResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Administrator_1.Administrator)
], FindUniqueAdministratorResolver);

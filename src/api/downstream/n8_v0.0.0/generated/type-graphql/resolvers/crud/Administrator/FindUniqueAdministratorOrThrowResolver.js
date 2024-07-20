"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueAdministratorOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindUniqueAdministratorOrThrowArgs_1 = require("./args/FindUniqueAdministratorOrThrowArgs");
const Administrator_1 = require("../../../models/Administrator");
const helpers_1 = require("../../../helpers");
let FindUniqueAdministratorOrThrowResolver = class FindUniqueAdministratorOrThrowResolver {
    async getAdministrator(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).administrator.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FindUniqueAdministratorOrThrowResolver = FindUniqueAdministratorOrThrowResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Administrator_1.Administrator, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueAdministratorOrThrowArgs_1.FindUniqueAdministratorOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueAdministratorOrThrowResolver.prototype, "getAdministrator", null);
exports.FindUniqueAdministratorOrThrowResolver = FindUniqueAdministratorOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Administrator_1.Administrator)
], FindUniqueAdministratorOrThrowResolver);

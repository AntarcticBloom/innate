"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstAdministratorResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindFirstAdministratorArgs_1 = require("./args/FindFirstAdministratorArgs");
const Administrator_1 = require("../../../models/Administrator");
const helpers_1 = require("../../../helpers");
let FindFirstAdministratorResolver = class FindFirstAdministratorResolver {
    async findFirstAdministrator(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).administrator.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FindFirstAdministratorResolver = FindFirstAdministratorResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Administrator_1.Administrator, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstAdministratorArgs_1.FindFirstAdministratorArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstAdministratorResolver.prototype, "findFirstAdministrator", null);
exports.FindFirstAdministratorResolver = FindFirstAdministratorResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Administrator_1.Administrator)
], FindFirstAdministratorResolver);

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstAdministratorOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindFirstAdministratorOrThrowArgs_1 = require("./args/FindFirstAdministratorOrThrowArgs");
const Administrator_1 = require("../../../models/Administrator");
const helpers_1 = require("../../../helpers");
let FindFirstAdministratorOrThrowResolver = class FindFirstAdministratorOrThrowResolver {
    async findFirstAdministratorOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).administrator.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FindFirstAdministratorOrThrowResolver = FindFirstAdministratorOrThrowResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Administrator_1.Administrator, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstAdministratorOrThrowArgs_1.FindFirstAdministratorOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstAdministratorOrThrowResolver.prototype, "findFirstAdministratorOrThrow", null);
exports.FindFirstAdministratorOrThrowResolver = FindFirstAdministratorOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Administrator_1.Administrator)
], FindFirstAdministratorOrThrowResolver);

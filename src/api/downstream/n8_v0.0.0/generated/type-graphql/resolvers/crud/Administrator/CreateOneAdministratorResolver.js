"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneAdministratorResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateOneAdministratorArgs_1 = require("./args/CreateOneAdministratorArgs");
const Administrator_1 = require("../../../models/Administrator");
const helpers_1 = require("../../../helpers");
let CreateOneAdministratorResolver = class CreateOneAdministratorResolver {
    async createOneAdministrator(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).administrator.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.CreateOneAdministratorResolver = CreateOneAdministratorResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Administrator_1.Administrator, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneAdministratorArgs_1.CreateOneAdministratorArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateOneAdministratorResolver.prototype, "createOneAdministrator", null);
exports.CreateOneAdministratorResolver = CreateOneAdministratorResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Administrator_1.Administrator)
], CreateOneAdministratorResolver);

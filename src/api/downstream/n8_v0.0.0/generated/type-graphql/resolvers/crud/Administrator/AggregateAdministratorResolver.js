"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateAdministratorResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateAdministratorArgs_1 = require("./args/AggregateAdministratorArgs");
const Administrator_1 = require("../../../models/Administrator");
const AggregateAdministrator_1 = require("../../outputs/AggregateAdministrator");
const helpers_1 = require("../../../helpers");
let AggregateAdministratorResolver = class AggregateAdministratorResolver {
    async aggregateAdministrator(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).administrator.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
};
exports.AggregateAdministratorResolver = AggregateAdministratorResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateAdministrator_1.AggregateAdministrator, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateAdministratorArgs_1.AggregateAdministratorArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateAdministratorResolver.prototype, "aggregateAdministrator", null);
exports.AggregateAdministratorResolver = AggregateAdministratorResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Administrator_1.Administrator)
], AggregateAdministratorResolver);

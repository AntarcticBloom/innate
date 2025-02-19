"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByAdministratorResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GroupByAdministratorArgs_1 = require("./args/GroupByAdministratorArgs");
const Administrator_1 = require("../../../models/Administrator");
const AdministratorGroupBy_1 = require("../../outputs/AdministratorGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByAdministratorResolver = class GroupByAdministratorResolver {
    async groupByAdministrator(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).administrator.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
exports.GroupByAdministratorResolver = GroupByAdministratorResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [AdministratorGroupBy_1.AdministratorGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByAdministratorArgs_1.GroupByAdministratorArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByAdministratorResolver.prototype, "groupByAdministrator", null);
exports.GroupByAdministratorResolver = GroupByAdministratorResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Administrator_1.Administrator)
], GroupByAdministratorResolver);

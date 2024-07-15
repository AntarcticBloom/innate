"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByFieldResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GroupByFieldArgs_1 = require("./args/GroupByFieldArgs");
const Field_1 = require("../../../models/Field");
const FieldGroupBy_1 = require("../../outputs/FieldGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByFieldResolver = class GroupByFieldResolver {
    async groupByField(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).field.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
exports.GroupByFieldResolver = GroupByFieldResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [FieldGroupBy_1.FieldGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByFieldArgs_1.GroupByFieldArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByFieldResolver.prototype, "groupByField", null);
exports.GroupByFieldResolver = GroupByFieldResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Field_1.Field)
], GroupByFieldResolver);

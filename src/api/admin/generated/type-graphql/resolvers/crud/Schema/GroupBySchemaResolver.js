"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupBySchemaResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GroupBySchemaArgs_1 = require("./args/GroupBySchemaArgs");
const Schema_1 = require("../../../models/Schema");
const SchemaGroupBy_1 = require("../../outputs/SchemaGroupBy");
const helpers_1 = require("../../../helpers");
let GroupBySchemaResolver = class GroupBySchemaResolver {
    async groupBySchema(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).schema.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
exports.GroupBySchemaResolver = GroupBySchemaResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [SchemaGroupBy_1.SchemaGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupBySchemaArgs_1.GroupBySchemaArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupBySchemaResolver.prototype, "groupBySchema", null);
exports.GroupBySchemaResolver = GroupBySchemaResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Schema_1.Schema)
], GroupBySchemaResolver);

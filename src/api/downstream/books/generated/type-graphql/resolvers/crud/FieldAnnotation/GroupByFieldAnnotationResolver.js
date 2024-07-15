"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByFieldAnnotationResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GroupByFieldAnnotationArgs_1 = require("./args/GroupByFieldAnnotationArgs");
const FieldAnnotation_1 = require("../../../models/FieldAnnotation");
const FieldAnnotationGroupBy_1 = require("../../outputs/FieldAnnotationGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByFieldAnnotationResolver = class GroupByFieldAnnotationResolver {
    async groupByFieldAnnotation(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).fieldAnnotation.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
exports.GroupByFieldAnnotationResolver = GroupByFieldAnnotationResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [FieldAnnotationGroupBy_1.FieldAnnotationGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByFieldAnnotationArgs_1.GroupByFieldAnnotationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByFieldAnnotationResolver.prototype, "groupByFieldAnnotation", null);
exports.GroupByFieldAnnotationResolver = GroupByFieldAnnotationResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => FieldAnnotation_1.FieldAnnotation)
], GroupByFieldAnnotationResolver);

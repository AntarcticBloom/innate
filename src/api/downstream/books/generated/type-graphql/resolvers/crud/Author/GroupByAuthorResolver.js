"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByAuthorResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GroupByAuthorArgs_1 = require("./args/GroupByAuthorArgs");
const Author_1 = require("../../../models/Author");
const AuthorGroupBy_1 = require("../../outputs/AuthorGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByAuthorResolver = class GroupByAuthorResolver {
    async groupByAuthor(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).author.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
exports.GroupByAuthorResolver = GroupByAuthorResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [AuthorGroupBy_1.AuthorGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByAuthorArgs_1.GroupByAuthorArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByAuthorResolver.prototype, "groupByAuthor", null);
exports.GroupByAuthorResolver = GroupByAuthorResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Author_1.Author)
], GroupByAuthorResolver);

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByBookAuthorResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GroupByBookAuthorArgs_1 = require("./args/GroupByBookAuthorArgs");
const BookAuthor_1 = require("../../../models/BookAuthor");
const BookAuthorGroupBy_1 = require("../../outputs/BookAuthorGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByBookAuthorResolver = class GroupByBookAuthorResolver {
    async groupByBookAuthor(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).bookAuthor.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
exports.GroupByBookAuthorResolver = GroupByBookAuthorResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [BookAuthorGroupBy_1.BookAuthorGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByBookAuthorArgs_1.GroupByBookAuthorArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByBookAuthorResolver.prototype, "groupByBookAuthor", null);
exports.GroupByBookAuthorResolver = GroupByBookAuthorResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => BookAuthor_1.BookAuthor)
], GroupByBookAuthorResolver);

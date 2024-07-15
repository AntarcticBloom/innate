"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByBookResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GroupByBookArgs_1 = require("./args/GroupByBookArgs");
const Book_1 = require("../../../models/Book");
const BookGroupBy_1 = require("../../outputs/BookGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByBookResolver = class GroupByBookResolver {
    async groupByBook(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).book.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
exports.GroupByBookResolver = GroupByBookResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [BookGroupBy_1.BookGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByBookArgs_1.GroupByBookArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByBookResolver.prototype, "groupByBook", null);
exports.GroupByBookResolver = GroupByBookResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Book_1.Book)
], GroupByBookResolver);

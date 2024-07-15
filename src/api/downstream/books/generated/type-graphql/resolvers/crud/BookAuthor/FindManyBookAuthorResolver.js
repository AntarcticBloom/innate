"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyBookAuthorResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindManyBookAuthorArgs_1 = require("./args/FindManyBookAuthorArgs");
const BookAuthor_1 = require("../../../models/BookAuthor");
const helpers_1 = require("../../../helpers");
let FindManyBookAuthorResolver = class FindManyBookAuthorResolver {
    async bookAuthors(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).bookAuthor.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FindManyBookAuthorResolver = FindManyBookAuthorResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [BookAuthor_1.BookAuthor], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyBookAuthorArgs_1.FindManyBookAuthorArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindManyBookAuthorResolver.prototype, "bookAuthors", null);
exports.FindManyBookAuthorResolver = FindManyBookAuthorResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => BookAuthor_1.BookAuthor)
], FindManyBookAuthorResolver);

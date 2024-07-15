"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueBookAuthorResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindUniqueBookAuthorArgs_1 = require("./args/FindUniqueBookAuthorArgs");
const BookAuthor_1 = require("../../../models/BookAuthor");
const helpers_1 = require("../../../helpers");
let FindUniqueBookAuthorResolver = class FindUniqueBookAuthorResolver {
    async bookAuthor(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).bookAuthor.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FindUniqueBookAuthorResolver = FindUniqueBookAuthorResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => BookAuthor_1.BookAuthor, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueBookAuthorArgs_1.FindUniqueBookAuthorArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueBookAuthorResolver.prototype, "bookAuthor", null);
exports.FindUniqueBookAuthorResolver = FindUniqueBookAuthorResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => BookAuthor_1.BookAuthor)
], FindUniqueBookAuthorResolver);

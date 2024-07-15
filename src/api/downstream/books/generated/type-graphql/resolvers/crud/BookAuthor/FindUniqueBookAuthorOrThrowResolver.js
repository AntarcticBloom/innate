"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueBookAuthorOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindUniqueBookAuthorOrThrowArgs_1 = require("./args/FindUniqueBookAuthorOrThrowArgs");
const BookAuthor_1 = require("../../../models/BookAuthor");
const helpers_1 = require("../../../helpers");
let FindUniqueBookAuthorOrThrowResolver = class FindUniqueBookAuthorOrThrowResolver {
    async getBookAuthor(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).bookAuthor.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FindUniqueBookAuthorOrThrowResolver = FindUniqueBookAuthorOrThrowResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => BookAuthor_1.BookAuthor, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueBookAuthorOrThrowArgs_1.FindUniqueBookAuthorOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueBookAuthorOrThrowResolver.prototype, "getBookAuthor", null);
exports.FindUniqueBookAuthorOrThrowResolver = FindUniqueBookAuthorOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => BookAuthor_1.BookAuthor)
], FindUniqueBookAuthorOrThrowResolver);
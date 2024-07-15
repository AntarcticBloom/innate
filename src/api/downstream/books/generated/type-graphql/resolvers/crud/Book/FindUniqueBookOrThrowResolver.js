"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueBookOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindUniqueBookOrThrowArgs_1 = require("./args/FindUniqueBookOrThrowArgs");
const Book_1 = require("../../../models/Book");
const helpers_1 = require("../../../helpers");
let FindUniqueBookOrThrowResolver = class FindUniqueBookOrThrowResolver {
    async getBook(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).book.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FindUniqueBookOrThrowResolver = FindUniqueBookOrThrowResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Book_1.Book, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueBookOrThrowArgs_1.FindUniqueBookOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueBookOrThrowResolver.prototype, "getBook", null);
exports.FindUniqueBookOrThrowResolver = FindUniqueBookOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Book_1.Book)
], FindUniqueBookOrThrowResolver);

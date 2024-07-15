"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstBookAuthorResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindFirstBookAuthorArgs_1 = require("./args/FindFirstBookAuthorArgs");
const BookAuthor_1 = require("../../../models/BookAuthor");
const helpers_1 = require("../../../helpers");
let FindFirstBookAuthorResolver = class FindFirstBookAuthorResolver {
    async findFirstBookAuthor(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).bookAuthor.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FindFirstBookAuthorResolver = FindFirstBookAuthorResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => BookAuthor_1.BookAuthor, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstBookAuthorArgs_1.FindFirstBookAuthorArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstBookAuthorResolver.prototype, "findFirstBookAuthor", null);
exports.FindFirstBookAuthorResolver = FindFirstBookAuthorResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => BookAuthor_1.BookAuthor)
], FindFirstBookAuthorResolver);

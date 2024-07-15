"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueAuthorResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindUniqueAuthorArgs_1 = require("./args/FindUniqueAuthorArgs");
const Author_1 = require("../../../models/Author");
const helpers_1 = require("../../../helpers");
let FindUniqueAuthorResolver = class FindUniqueAuthorResolver {
    async author(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).author.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FindUniqueAuthorResolver = FindUniqueAuthorResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Author_1.Author, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueAuthorArgs_1.FindUniqueAuthorArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueAuthorResolver.prototype, "author", null);
exports.FindUniqueAuthorResolver = FindUniqueAuthorResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Author_1.Author)
], FindUniqueAuthorResolver);

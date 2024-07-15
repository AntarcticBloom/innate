"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstAuthorResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindFirstAuthorArgs_1 = require("./args/FindFirstAuthorArgs");
const Author_1 = require("../../../models/Author");
const helpers_1 = require("../../../helpers");
let FindFirstAuthorResolver = class FindFirstAuthorResolver {
    async findFirstAuthor(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).author.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FindFirstAuthorResolver = FindFirstAuthorResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Author_1.Author, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstAuthorArgs_1.FindFirstAuthorArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstAuthorResolver.prototype, "findFirstAuthor", null);
exports.FindFirstAuthorResolver = FindFirstAuthorResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Author_1.Author)
], FindFirstAuthorResolver);

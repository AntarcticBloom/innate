"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyAuthorResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindManyAuthorArgs_1 = require("./args/FindManyAuthorArgs");
const Author_1 = require("../../../models/Author");
const helpers_1 = require("../../../helpers");
let FindManyAuthorResolver = class FindManyAuthorResolver {
    async authors(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).author.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FindManyAuthorResolver = FindManyAuthorResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Author_1.Author], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyAuthorArgs_1.FindManyAuthorArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindManyAuthorResolver.prototype, "authors", null);
exports.FindManyAuthorResolver = FindManyAuthorResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Author_1.Author)
], FindManyAuthorResolver);

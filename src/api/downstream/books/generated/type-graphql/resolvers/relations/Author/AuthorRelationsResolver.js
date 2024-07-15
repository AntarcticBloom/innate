"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Author_1 = require("../../../models/Author");
const BookAuthor_1 = require("../../../models/BookAuthor");
const AuthorBookAuthorsArgs_1 = require("./args/AuthorBookAuthorsArgs");
const helpers_1 = require("../../../helpers");
let AuthorRelationsResolver = class AuthorRelationsResolver {
    async bookAuthors(author, ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).author.findUniqueOrThrow({
            where: {
                id: author.id,
            },
        }).bookAuthors({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.AuthorRelationsResolver = AuthorRelationsResolver;
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [BookAuthor_1.BookAuthor], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__param(3, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Author_1.Author, Object, Object, AuthorBookAuthorsArgs_1.AuthorBookAuthorsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AuthorRelationsResolver.prototype, "bookAuthors", null);
exports.AuthorRelationsResolver = AuthorRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Author_1.Author)
], AuthorRelationsResolver);

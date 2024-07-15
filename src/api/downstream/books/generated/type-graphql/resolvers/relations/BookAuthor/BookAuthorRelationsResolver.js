"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookAuthorRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Author_1 = require("../../../models/Author");
const Book_1 = require("../../../models/Book");
const BookAuthor_1 = require("../../../models/BookAuthor");
const helpers_1 = require("../../../helpers");
let BookAuthorRelationsResolver = class BookAuthorRelationsResolver {
    async author(bookAuthor, ctx, info) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).bookAuthor.findUniqueOrThrow({
            where: {
                bookId_authorId: {
                    bookId: bookAuthor.bookId,
                    authorId: bookAuthor.authorId,
                },
            },
        }).author({
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async book(bookAuthor, ctx, info) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).bookAuthor.findUniqueOrThrow({
            where: {
                bookId_authorId: {
                    bookId: bookAuthor.bookId,
                    authorId: bookAuthor.authorId,
                },
            },
        }).book({
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.BookAuthorRelationsResolver = BookAuthorRelationsResolver;
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Author_1.Author, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [BookAuthor_1.BookAuthor, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], BookAuthorRelationsResolver.prototype, "author", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Book_1.Book, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [BookAuthor_1.BookAuthor, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], BookAuthorRelationsResolver.prototype, "book", null);
exports.BookAuthorRelationsResolver = BookAuthorRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => BookAuthor_1.BookAuthor)
], BookAuthorRelationsResolver);

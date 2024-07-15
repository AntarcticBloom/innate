"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneBookAuthorResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpsertOneBookAuthorArgs_1 = require("./args/UpsertOneBookAuthorArgs");
const BookAuthor_1 = require("../../../models/BookAuthor");
const helpers_1 = require("../../../helpers");
let UpsertOneBookAuthorResolver = class UpsertOneBookAuthorResolver {
    async upsertOneBookAuthor(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).bookAuthor.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.UpsertOneBookAuthorResolver = UpsertOneBookAuthorResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => BookAuthor_1.BookAuthor, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneBookAuthorArgs_1.UpsertOneBookAuthorArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpsertOneBookAuthorResolver.prototype, "upsertOneBookAuthor", null);
exports.UpsertOneBookAuthorResolver = UpsertOneBookAuthorResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => BookAuthor_1.BookAuthor)
], UpsertOneBookAuthorResolver);

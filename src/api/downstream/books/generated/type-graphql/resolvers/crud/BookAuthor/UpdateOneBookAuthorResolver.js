"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneBookAuthorResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateOneBookAuthorArgs_1 = require("./args/UpdateOneBookAuthorArgs");
const BookAuthor_1 = require("../../../models/BookAuthor");
const helpers_1 = require("../../../helpers");
let UpdateOneBookAuthorResolver = class UpdateOneBookAuthorResolver {
    async updateOneBookAuthor(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).bookAuthor.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.UpdateOneBookAuthorResolver = UpdateOneBookAuthorResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => BookAuthor_1.BookAuthor, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneBookAuthorArgs_1.UpdateOneBookAuthorArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateOneBookAuthorResolver.prototype, "updateOneBookAuthor", null);
exports.UpdateOneBookAuthorResolver = UpdateOneBookAuthorResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => BookAuthor_1.BookAuthor)
], UpdateOneBookAuthorResolver);

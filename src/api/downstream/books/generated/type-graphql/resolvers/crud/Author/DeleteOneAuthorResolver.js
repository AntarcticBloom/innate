"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneAuthorResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteOneAuthorArgs_1 = require("./args/DeleteOneAuthorArgs");
const Author_1 = require("../../../models/Author");
const helpers_1 = require("../../../helpers");
let DeleteOneAuthorResolver = class DeleteOneAuthorResolver {
    async deleteOneAuthor(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).author.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.DeleteOneAuthorResolver = DeleteOneAuthorResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Author_1.Author, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneAuthorArgs_1.DeleteOneAuthorArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteOneAuthorResolver.prototype, "deleteOneAuthor", null);
exports.DeleteOneAuthorResolver = DeleteOneAuthorResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Author_1.Author)
], DeleteOneAuthorResolver);

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneBookResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateOneBookArgs_1 = require("./args/UpdateOneBookArgs");
const Book_1 = require("../../../models/Book");
const helpers_1 = require("../../../helpers");
let UpdateOneBookResolver = class UpdateOneBookResolver {
    async updateOneBook(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).book.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.UpdateOneBookResolver = UpdateOneBookResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Book_1.Book, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneBookArgs_1.UpdateOneBookArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateOneBookResolver.prototype, "updateOneBook", null);
exports.UpdateOneBookResolver = UpdateOneBookResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Book_1.Book)
], UpdateOneBookResolver);

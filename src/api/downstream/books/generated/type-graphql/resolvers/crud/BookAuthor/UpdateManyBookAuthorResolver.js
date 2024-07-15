"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyBookAuthorResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateManyBookAuthorArgs_1 = require("./args/UpdateManyBookAuthorArgs");
const BookAuthor_1 = require("../../../models/BookAuthor");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let UpdateManyBookAuthorResolver = class UpdateManyBookAuthorResolver {
    async updateManyBookAuthor(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).bookAuthor.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.UpdateManyBookAuthorResolver = UpdateManyBookAuthorResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyBookAuthorArgs_1.UpdateManyBookAuthorArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateManyBookAuthorResolver.prototype, "updateManyBookAuthor", null);
exports.UpdateManyBookAuthorResolver = UpdateManyBookAuthorResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => BookAuthor_1.BookAuthor)
], UpdateManyBookAuthorResolver);

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyBookAuthorResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteManyBookAuthorArgs_1 = require("./args/DeleteManyBookAuthorArgs");
const BookAuthor_1 = require("../../../models/BookAuthor");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let DeleteManyBookAuthorResolver = class DeleteManyBookAuthorResolver {
    async deleteManyBookAuthor(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).bookAuthor.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.DeleteManyBookAuthorResolver = DeleteManyBookAuthorResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyBookAuthorArgs_1.DeleteManyBookAuthorArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteManyBookAuthorResolver.prototype, "deleteManyBookAuthor", null);
exports.DeleteManyBookAuthorResolver = DeleteManyBookAuthorResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => BookAuthor_1.BookAuthor)
], DeleteManyBookAuthorResolver);

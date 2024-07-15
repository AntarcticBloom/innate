"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyBookResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteManyBookArgs_1 = require("./args/DeleteManyBookArgs");
const Book_1 = require("../../../models/Book");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let DeleteManyBookResolver = class DeleteManyBookResolver {
    async deleteManyBook(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).book.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.DeleteManyBookResolver = DeleteManyBookResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyBookArgs_1.DeleteManyBookArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteManyBookResolver.prototype, "deleteManyBook", null);
exports.DeleteManyBookResolver = DeleteManyBookResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Book_1.Book)
], DeleteManyBookResolver);

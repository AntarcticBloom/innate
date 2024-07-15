"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyFieldResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteManyFieldArgs_1 = require("./args/DeleteManyFieldArgs");
const Field_1 = require("../../../models/Field");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let DeleteManyFieldResolver = class DeleteManyFieldResolver {
    async deleteManyField(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).field.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.DeleteManyFieldResolver = DeleteManyFieldResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyFieldArgs_1.DeleteManyFieldArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteManyFieldResolver.prototype, "deleteManyField", null);
exports.DeleteManyFieldResolver = DeleteManyFieldResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Field_1.Field)
], DeleteManyFieldResolver);

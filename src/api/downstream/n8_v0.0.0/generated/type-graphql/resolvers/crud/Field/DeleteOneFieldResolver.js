"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneFieldResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteOneFieldArgs_1 = require("./args/DeleteOneFieldArgs");
const Field_1 = require("../../../models/Field");
const helpers_1 = require("../../../helpers");
let DeleteOneFieldResolver = class DeleteOneFieldResolver {
    async deleteOneField(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).field.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.DeleteOneFieldResolver = DeleteOneFieldResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Field_1.Field, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneFieldArgs_1.DeleteOneFieldArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteOneFieldResolver.prototype, "deleteOneField", null);
exports.DeleteOneFieldResolver = DeleteOneFieldResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Field_1.Field)
], DeleteOneFieldResolver);

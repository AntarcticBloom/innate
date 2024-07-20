"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneFieldResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateOneFieldArgs_1 = require("./args/UpdateOneFieldArgs");
const Field_1 = require("../../../models/Field");
const helpers_1 = require("../../../helpers");
let UpdateOneFieldResolver = class UpdateOneFieldResolver {
    async updateOneField(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).field.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.UpdateOneFieldResolver = UpdateOneFieldResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Field_1.Field, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneFieldArgs_1.UpdateOneFieldArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateOneFieldResolver.prototype, "updateOneField", null);
exports.UpdateOneFieldResolver = UpdateOneFieldResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Field_1.Field)
], UpdateOneFieldResolver);

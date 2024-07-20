"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneFieldAnnotationResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteOneFieldAnnotationArgs_1 = require("./args/DeleteOneFieldAnnotationArgs");
const FieldAnnotation_1 = require("../../../models/FieldAnnotation");
const helpers_1 = require("../../../helpers");
let DeleteOneFieldAnnotationResolver = class DeleteOneFieldAnnotationResolver {
    async deleteOneFieldAnnotation(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).fieldAnnotation.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.DeleteOneFieldAnnotationResolver = DeleteOneFieldAnnotationResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => FieldAnnotation_1.FieldAnnotation, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneFieldAnnotationArgs_1.DeleteOneFieldAnnotationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteOneFieldAnnotationResolver.prototype, "deleteOneFieldAnnotation", null);
exports.DeleteOneFieldAnnotationResolver = DeleteOneFieldAnnotationResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => FieldAnnotation_1.FieldAnnotation)
], DeleteOneFieldAnnotationResolver);

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueFieldAnnotationResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindUniqueFieldAnnotationArgs_1 = require("./args/FindUniqueFieldAnnotationArgs");
const FieldAnnotation_1 = require("../../../models/FieldAnnotation");
const helpers_1 = require("../../../helpers");
let FindUniqueFieldAnnotationResolver = class FindUniqueFieldAnnotationResolver {
    async fieldAnnotation(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).fieldAnnotation.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FindUniqueFieldAnnotationResolver = FindUniqueFieldAnnotationResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => FieldAnnotation_1.FieldAnnotation, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueFieldAnnotationArgs_1.FindUniqueFieldAnnotationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueFieldAnnotationResolver.prototype, "fieldAnnotation", null);
exports.FindUniqueFieldAnnotationResolver = FindUniqueFieldAnnotationResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => FieldAnnotation_1.FieldAnnotation)
], FindUniqueFieldAnnotationResolver);

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneFieldAnnotationResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateOneFieldAnnotationArgs_1 = require("./args/CreateOneFieldAnnotationArgs");
const FieldAnnotation_1 = require("../../../models/FieldAnnotation");
const helpers_1 = require("../../../helpers");
let CreateOneFieldAnnotationResolver = class CreateOneFieldAnnotationResolver {
    async createOneFieldAnnotation(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).fieldAnnotation.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.CreateOneFieldAnnotationResolver = CreateOneFieldAnnotationResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => FieldAnnotation_1.FieldAnnotation, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneFieldAnnotationArgs_1.CreateOneFieldAnnotationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateOneFieldAnnotationResolver.prototype, "createOneFieldAnnotation", null);
exports.CreateOneFieldAnnotationResolver = CreateOneFieldAnnotationResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => FieldAnnotation_1.FieldAnnotation)
], CreateOneFieldAnnotationResolver);

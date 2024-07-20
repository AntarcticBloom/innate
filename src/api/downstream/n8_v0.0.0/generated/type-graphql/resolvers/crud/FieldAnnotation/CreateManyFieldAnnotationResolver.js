"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyFieldAnnotationResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateManyFieldAnnotationArgs_1 = require("./args/CreateManyFieldAnnotationArgs");
const FieldAnnotation_1 = require("../../../models/FieldAnnotation");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let CreateManyFieldAnnotationResolver = class CreateManyFieldAnnotationResolver {
    async createManyFieldAnnotation(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).fieldAnnotation.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.CreateManyFieldAnnotationResolver = CreateManyFieldAnnotationResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyFieldAnnotationArgs_1.CreateManyFieldAnnotationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateManyFieldAnnotationResolver.prototype, "createManyFieldAnnotation", null);
exports.CreateManyFieldAnnotationResolver = CreateManyFieldAnnotationResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => FieldAnnotation_1.FieldAnnotation)
], CreateManyFieldAnnotationResolver);

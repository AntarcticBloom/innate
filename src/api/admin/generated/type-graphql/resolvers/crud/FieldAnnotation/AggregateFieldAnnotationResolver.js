"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateFieldAnnotationResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateFieldAnnotationArgs_1 = require("./args/AggregateFieldAnnotationArgs");
const FieldAnnotation_1 = require("../../../models/FieldAnnotation");
const AggregateFieldAnnotation_1 = require("../../outputs/AggregateFieldAnnotation");
const helpers_1 = require("../../../helpers");
let AggregateFieldAnnotationResolver = class AggregateFieldAnnotationResolver {
    async aggregateFieldAnnotation(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).fieldAnnotation.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
};
exports.AggregateFieldAnnotationResolver = AggregateFieldAnnotationResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateFieldAnnotation_1.AggregateFieldAnnotation, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateFieldAnnotationArgs_1.AggregateFieldAnnotationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateFieldAnnotationResolver.prototype, "aggregateFieldAnnotation", null);
exports.AggregateFieldAnnotationResolver = AggregateFieldAnnotationResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => FieldAnnotation_1.FieldAnnotation)
], AggregateFieldAnnotationResolver);

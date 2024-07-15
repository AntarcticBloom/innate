"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateFieldResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateFieldArgs_1 = require("./args/AggregateFieldArgs");
const Field_1 = require("../../../models/Field");
const AggregateField_1 = require("../../outputs/AggregateField");
const helpers_1 = require("../../../helpers");
let AggregateFieldResolver = class AggregateFieldResolver {
    async aggregateField(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).field.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
};
exports.AggregateFieldResolver = AggregateFieldResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateField_1.AggregateField, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateFieldArgs_1.AggregateFieldArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateFieldResolver.prototype, "aggregateField", null);
exports.AggregateFieldResolver = AggregateFieldResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Field_1.Field)
], AggregateFieldResolver);

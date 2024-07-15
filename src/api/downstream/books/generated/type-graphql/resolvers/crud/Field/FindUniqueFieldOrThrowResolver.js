"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueFieldOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindUniqueFieldOrThrowArgs_1 = require("./args/FindUniqueFieldOrThrowArgs");
const Field_1 = require("../../../models/Field");
const helpers_1 = require("../../../helpers");
let FindUniqueFieldOrThrowResolver = class FindUniqueFieldOrThrowResolver {
    async getField(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).field.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FindUniqueFieldOrThrowResolver = FindUniqueFieldOrThrowResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Field_1.Field, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueFieldOrThrowArgs_1.FindUniqueFieldOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueFieldOrThrowResolver.prototype, "getField", null);
exports.FindUniqueFieldOrThrowResolver = FindUniqueFieldOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Field_1.Field)
], FindUniqueFieldOrThrowResolver);

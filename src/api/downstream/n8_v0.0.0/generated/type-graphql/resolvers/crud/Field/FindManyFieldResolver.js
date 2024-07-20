"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyFieldResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindManyFieldArgs_1 = require("./args/FindManyFieldArgs");
const Field_1 = require("../../../models/Field");
const helpers_1 = require("../../../helpers");
let FindManyFieldResolver = class FindManyFieldResolver {
    async fields(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).field.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FindManyFieldResolver = FindManyFieldResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Field_1.Field], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyFieldArgs_1.FindManyFieldArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindManyFieldResolver.prototype, "fields", null);
exports.FindManyFieldResolver = FindManyFieldResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Field_1.Field)
], FindManyFieldResolver);

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstFieldResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindFirstFieldArgs_1 = require("./args/FindFirstFieldArgs");
const Field_1 = require("../../../models/Field");
const helpers_1 = require("../../../helpers");
let FindFirstFieldResolver = class FindFirstFieldResolver {
    async findFirstField(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).field.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FindFirstFieldResolver = FindFirstFieldResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Field_1.Field, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstFieldArgs_1.FindFirstFieldArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstFieldResolver.prototype, "findFirstField", null);
exports.FindFirstFieldResolver = FindFirstFieldResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Field_1.Field)
], FindFirstFieldResolver);

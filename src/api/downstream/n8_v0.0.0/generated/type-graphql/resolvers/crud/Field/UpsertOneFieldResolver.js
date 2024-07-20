"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneFieldResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpsertOneFieldArgs_1 = require("./args/UpsertOneFieldArgs");
const Field_1 = require("../../../models/Field");
const helpers_1 = require("../../../helpers");
let UpsertOneFieldResolver = class UpsertOneFieldResolver {
    async upsertOneField(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).field.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.UpsertOneFieldResolver = UpsertOneFieldResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Field_1.Field, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneFieldArgs_1.UpsertOneFieldArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpsertOneFieldResolver.prototype, "upsertOneField", null);
exports.UpsertOneFieldResolver = UpsertOneFieldResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Field_1.Field)
], UpsertOneFieldResolver);

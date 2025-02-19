"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneSchemaResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpsertOneSchemaArgs_1 = require("./args/UpsertOneSchemaArgs");
const Schema_1 = require("../../../models/Schema");
const helpers_1 = require("../../../helpers");
let UpsertOneSchemaResolver = class UpsertOneSchemaResolver {
    async upsertOneSchema(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).schema.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.UpsertOneSchemaResolver = UpsertOneSchemaResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Schema_1.Schema, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneSchemaArgs_1.UpsertOneSchemaArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpsertOneSchemaResolver.prototype, "upsertOneSchema", null);
exports.UpsertOneSchemaResolver = UpsertOneSchemaResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Schema_1.Schema)
], UpsertOneSchemaResolver);

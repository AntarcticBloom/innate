"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueSchemaOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindUniqueSchemaOrThrowArgs_1 = require("./args/FindUniqueSchemaOrThrowArgs");
const Schema_1 = require("../../../models/Schema");
const helpers_1 = require("../../../helpers");
let FindUniqueSchemaOrThrowResolver = class FindUniqueSchemaOrThrowResolver {
    async getSchema(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).schema.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FindUniqueSchemaOrThrowResolver = FindUniqueSchemaOrThrowResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Schema_1.Schema, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueSchemaOrThrowArgs_1.FindUniqueSchemaOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueSchemaOrThrowResolver.prototype, "getSchema", null);
exports.FindUniqueSchemaOrThrowResolver = FindUniqueSchemaOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Schema_1.Schema)
], FindUniqueSchemaOrThrowResolver);

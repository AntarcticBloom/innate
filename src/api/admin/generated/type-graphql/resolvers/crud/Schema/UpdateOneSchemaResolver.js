"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneSchemaResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateOneSchemaArgs_1 = require("./args/UpdateOneSchemaArgs");
const Schema_1 = require("../../../models/Schema");
const helpers_1 = require("../../../helpers");
let UpdateOneSchemaResolver = class UpdateOneSchemaResolver {
    async updateOneSchema(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).schema.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.UpdateOneSchemaResolver = UpdateOneSchemaResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Schema_1.Schema, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneSchemaArgs_1.UpdateOneSchemaArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateOneSchemaResolver.prototype, "updateOneSchema", null);
exports.UpdateOneSchemaResolver = UpdateOneSchemaResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Schema_1.Schema)
], UpdateOneSchemaResolver);

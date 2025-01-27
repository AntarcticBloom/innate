"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneSchemaResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateOneSchemaArgs_1 = require("./args/CreateOneSchemaArgs");
const Schema_1 = require("../../../models/Schema");
const helpers_1 = require("../../../helpers");
let CreateOneSchemaResolver = class CreateOneSchemaResolver {
    async createOneSchema(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).schema.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.CreateOneSchemaResolver = CreateOneSchemaResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Schema_1.Schema, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneSchemaArgs_1.CreateOneSchemaArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateOneSchemaResolver.prototype, "createOneSchema", null);
exports.CreateOneSchemaResolver = CreateOneSchemaResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Schema_1.Schema)
], CreateOneSchemaResolver);
